export const getFileName = (file) => {
    let fileName = file.split("/").pop()
    return fileName.split(".").shift()
}