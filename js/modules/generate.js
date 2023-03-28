export function idGenerate() {
    let symbols, id
    symbols = "ABCDEFGHJKLMNOPQRSTUVWXYZ0123456789";
    id = ""
    for (let i = 0; i < 6; i++) {
        id += symbols[Math.floor(Math.random() * symbols.length)];
    }
    return id
}