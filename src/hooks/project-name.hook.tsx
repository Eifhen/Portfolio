





export default function useProjectNameHook(){
    return (name:string) => {
        const whiteSpaceRegEx = /\s/g;
        const urlProjectName = name.replace(whiteSpaceRegEx, "-");
        return urlProjectName;
    } 
}