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

class CreaterPDF{
  Create(file){
    console.log('the file in PDF was created: ' + file)
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

class UserManager{
  constructor(){
    this.createrPDF = new CreaterPDF();
    this.writer = new Writer();
  }

  SaveUsers(){
    console.log('The users were saved.')
  }
}

const userManager = new UserManager();

userManager.createrPDF.Create('teste')