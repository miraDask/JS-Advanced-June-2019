class FilmStudio {

    constructor(studioName) {
        this.name = studioName;
        this.films = [];
    }

    casting(actor, role) {
        let isTheActorIsUnemployed = true;
        let output;

        if (this.films.length) {

            for (let f of this.films) {

                let roles = f.filmRoles.filter((r) => r.role === role);

                if (roles.length) {
                    let filmIndex = this.films.indexOf(f);
                    let wantedRole = this.films[filmIndex].filmRoles.filter((fR) => fR.role === role)[0];
                    let roleIndex = this.films[filmIndex].filmRoles.indexOf(wantedRole);

                    this.films[filmIndex].filmRoles[roleIndex].actor = actor;
                    isTheActorIsUnemployed = false;
                    output = `You got the job! Mr. ${actor} you are next ${role} in the ${f.filmName}. Congratz!`;
                    break;
                }
            }

            if (isTheActorIsUnemployed) {
                output = `${actor}, we cannot find a ${role} role...`;
            }

        } else {
            output = `There are no films yet in ${this.name}.`;
        }

        return output;
    }

    makeMovie(filmName, roles) {

        if (arguments.length === 2) {

            let firstArgIsString = typeof arguments[0] === 'string';
            let secondArgIsArray = arguments[1] instanceof Array;

            if (firstArgIsString && secondArgIsArray) {
                let findedFilms = this.films.filter((f) => f.filmName.includes(filmName));

                let filmRoles = roles.reduce((acc, cur) => {
                    let curFilmRole = {
                        role: cur,
                        actor: false
                    };
                    acc.push(curFilmRole);
                    return acc;
                }, []);

                let film = {
                    filmName,
                    filmRoles
                };

                if (findedFilms.length > 0) {
                    film.filmName += ` ${++findedFilms.length}`;
                }

                this.films.push(film);
                return film;
            } else {
                throw ('Invalid arguments')
            }

        } else {
            throw ('Invalid arguments count')
        }
    }

    lookForProducer(film) {

        let f = this.films.filter((f) => f.filmName === film)[0];
        let output;

        if (f) {
            output = `Film name: ${f.filmName}\n`;
            output += 'Cast:\n';
            Object.keys(f.filmRoles).forEach((role) => {
                output += `${f.filmRoles[role].actor} as ${f.filmRoles[role].role}\n`;
            });
        } else {
            throw new Error(`${film} do not exist yet, but we need the money...`)
        }

        return output;
    }
}

// unit tests here:

const assert = require('chai').assert;

describe("FilmStudio Tests …", () => {
    describe("constructor...", () => {
        it("creates new instance with empty array for films property", () => {
            const studio = new FilmStudio('studio');
            assert.deepEqual(studio.films, []);
        });

        it("creates new instance with correct name property", () => {
            const studio = new FilmStudio('studio');
            assert.equal(studio.name, 'studio');
        });
    });

    describe('Function makeMovie()...', () => {
        it('throws correct message if invalid count of arguments are passed', () => {
            const studio = new FilmStudio('studio');
            assert.throw(() => studio.makeMovie('movie'), 'Invalid arguments count');
            assert.throw(() => studio.makeMovie(), 'Invalid arguments count');
            assert.throw(() => studio.makeMovie('movie', 'roles', 'other'), 'Invalid arguments count');
        })

        it('throws correct message if first argument is not a string', () => {
            const studio = new FilmStudio('studio');
            assert.throw(() => studio.makeMovie(2, []), 'Invalid arguments');
            assert.throw(() => studio.makeMovie([], []), 'Invalid arguments');
            assert.throw(() => studio.makeMovie({}, []), 'Invalid arguments');
        })

        it('throws correct message if second argument is not a array', () => {
            const studio = new FilmStudio('studio');
            assert.throw(() => studio.makeMovie('movie', 'roles'), 'Invalid arguments');
            assert.throw(() => studio.makeMovie('movie', 2), 'Invalid arguments');
            assert.throw(() => studio.makeMovie('movie', {}), 'Invalid arguments');
        })

        it('register data correctly if argument valid', () => {
            const studio = new FilmStudio('studio');
            studio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            studio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']);
            const expected = [{
                    filmName: 'The Avengers',
                    filmRoles: [{
                            role: 'Iron-Man',
                            actor: false
                        },
                        {
                            role: 'Thor',
                            actor: false
                        },
                        {
                            role: 'Hulk',
                            actor: false
                        },
                        {
                            role: 'Arrow guy',
                            actor: false
                        }
                    ]
                },
                {
                    filmName: 'The Avengers 2',
                    filmRoles: [{
                            role: 'Iron-Man',
                            actor: false
                        },
                        {
                            role: 'Hulk',
                            actor: false
                        },
                        {
                            role: 'Arrow guy',
                            actor: false
                        },
                        {
                            role: 'Ant-man',
                            actor: false
                        }
                    ]
                }
            ];

            assert.deepEqual(studio.films, expected);
        })

        it('returns correct value if argument valid', () => {
            const studio = new FilmStudio('studio');
            const result = studio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            const expected = {
                filmName: 'The Avengers',
                filmRoles: [{
                        role: 'Iron-Man',
                        actor: false
                    },
                    {
                        role: 'Thor',
                        actor: false
                    },
                    {
                        role: 'Hulk',
                        actor: false
                    },
                    {
                        role: 'Arrow guy',
                        actor: false
                    }
                ]
            };

            assert.deepEqual(result, expected);
        })

        describe('Function casting()...', () => {
            it('returns correct message if there is no films registered', () => {
                const studio = new FilmStudio('studio');
                const result = studio.casting('Ani', 'Ani');
                const expected = 'There are no films yet in studio.';
                assert.equal(result,expected);
            })

            it('returns correct message if actor gets the role', () => {
                const actor = 'Tom';
                const role = 'Iron-Man';
                const filmName = 'The Avengers';
                const studio = new FilmStudio('studio');
                studio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy'])
                const result = studio.casting(actor, role);
                const expected = `You got the job! Mr. ${actor} you are next ${role} in the ${filmName}. Congratz!`;
                assert.equal(result,expected);
            })

            it('returns correct message if there is no role for the actor', () => {
                const actor = 'Tom';
                const role = 'Iron-Man';
                const studio = new FilmStudio('studio');
                studio.makeMovie('The Avengers', ['Thor', 'Hulk', 'Arrow guy'])
                const result = studio.casting(actor, role);
                const expected = `${actor}, we cannot find a ${role} role...`;
                assert.equal(result,expected);
            })
        })
    })

    describe('Function lookForProducer...', () => {
        it('throws Error if passed film do not exist', () => {
            const studio = new FilmStudio('studio');
            assert.throw(() => studio.lookForProducer('Avengers'), 'Avengers do not exist yet, but we need the money...');
        })

        it('returns correct message if film is found', () => {
            const actor = 'Tom';
            const role = 'Iron-Man';
            const film = 'The Avengers';
            const studio = new FilmStudio('studio');
            studio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            const result = studio.lookForProducer(film);
            const expected = 'Film name: The Avengers\n' + 
             'Cast:\n' +
            'false as Iron-Man\n' +
            'false as Thor\n' +
            'false as Hulk\n' +
            'false as Arrow guy\n';
            assert.equal(result,expected);
        })
    })
});