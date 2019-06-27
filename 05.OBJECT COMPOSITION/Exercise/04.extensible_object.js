function extensibleObjectCreator(template) {
    return {
        extend(template) {
            for (const key in template) {
                if (typeof template[key] === 'function') {
                    Object.getPrototypeOf(this)[key] = template[key];
                } else {
                    this[key] = template[key];
                }
            }
        }
    }
}