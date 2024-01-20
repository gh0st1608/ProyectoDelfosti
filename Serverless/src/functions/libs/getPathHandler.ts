export const getPathHandler = (pathDirName: string) => {
  const dir = pathDirName.split(process.cwd())[1].substring(1).replace(/\\/g, "/")
  console.log(dir)
  return pathDirName.split(process.cwd())[1].substring(1).replace(/\\/g, "/");
};
