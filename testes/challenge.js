class Reader{
  Read(path){
    return 'Content of the file' + path
  }
}

class Writer{
  Write(file, content){
    console.log('Content: ' + content, 'File:' + file)
  }
}

class Creater{
  Create(file){
    console.log('the file was created: ' + file)
  }
}

class Delete{
  Delete(file){
    console.log('the file was deleted' + file)
  }
}

class FileManipulator{
  constructor(file){
    this.file = file
    this.reader = new Reader(); 
    this.writer = new Writer();
    this.creater = new Creater();
    this.delete = new Delete();
  }
}

const fileManipulator = new FileManipulator();
console.log(fileManipulator.reader.Read('path1234.txt'))