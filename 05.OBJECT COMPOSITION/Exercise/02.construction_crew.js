function checkWorker(worker) {
    const hydrateWorker = () => {
        worker.levelOfHydrated += worker.experience * (worker.weight * 0.1);
        worker.dizziness = false;
    }

    if (worker.dizziness) {
        hydrateWorker();
    }

    return worker;
}
//test:
// let worker = {
//     weight: 120,
//     experience: 20,
//     levelOfHydrated: 200,
//     dizziness: true
// }

// console.log(checkWorker(worker))