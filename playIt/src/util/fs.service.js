import  fs from 'fs';
import AdmZip from 'adm-zip';



const createFodler =  async () => {
  const folderName = './temp';
  try {
    fs.mkdir(folderName);
  } catch (err) {
    console.error(err);
  }
}

const extractFolder = async() => {
  var zip = new AdmZip("./zipfiles/src.zip");
  zip.extractAllTo("./temp");
  let dir = './temp';
  let files = getFiles(dir);
  return files;
}

const deleteFolder = (dir) => {
  fs.rm(dir, { recursive: true, force: true }, err => {
    if (err) {
      throw err;
    }
    console.log(`${dir} is deleted!`);
  });
}
const extractFolderAndGetData = async () => {
  await createFodler();
  let files = await extractFolder();
  deleteFolder("./temp");
  pushLocalChanges(files);
  return files;
}

// Recursive function to get files
function getFiles(dir, files = []) {

  // Get an array of all files and directories in the passed directory using fs.readdirSync
  const fileList = fs.readdirSync(dir)
  // Create the full path of the file/directory by concatenating the passed directory and file/directory name
  for (const file of fileList) {
    const name = `${dir}/${file}`
    // Check if the current file/directory is a directory using fs.statSync
    if (fs.statSync(name).isDirectory()) {
      // If it is a directory, recursively call the getFiles function with the directory path and the files array
      getFiles(name, files)
    } else {
      // If it is a file, push the full path to the files array
      files.push({ name: name, content: fs.readFileSync(name, { 'encoding': 'base64' }) })
    }
  }
  return files;
}

const pushLocalChanges = (fileInfo) => {
    fileInfo.forEach((file) => {
        filePath = file.name.split("temp/");
        console.log(file.name);
        console.log(file.content);
    });
}

// let files = extractFolderAndGetData();
// console.log(files);

export default extractFolderAndGetData;
