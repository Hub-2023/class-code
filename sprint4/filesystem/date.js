export function getFileInfo (file) {
    const lastModifiedDate = new Date(file.lastModified);
    const year = lastModifiedDate.getFullYear();
    const month = lastModifiedDate.getMonth() + 1;
    const day = lastModifiedDate.getDate();
    const hours = lastModifiedDate.getHours();
    const minutes = lastModifiedDate.getMinutes();
    const seconds = lastModifiedDate.getSeconds();
    return `${file.name} was last modified on ${year}-${month}-${day} at ${hours}:${minutes}:${seconds}`
}