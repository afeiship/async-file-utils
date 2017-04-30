import mkdirp from 'mkdirp';
import rimraf from 'rimraf';


export async function mkdirpSync(inPath){
  return new Promise((resolve,reject)=>{
    mkdirp(inPath, (err)=>{
        return !err ? resolve() : reject();
    });
  })
};


export async function rimrafSync(inPath){
  return new Promise((resolve,reject)=>{
    rimraf(inPath, (err)=>{
        return !err ? resolve() : reject();
    });
  })
};
