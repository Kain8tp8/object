type AuthorData = {
    name:string,
    surname:string,
    work:string,
    photo: string,
    rating: number
}
type Blog = {
    name: string,
    date: number,
    photo: string,
    data:string,
    avatar: AuthorData
}

type Mator ={
    serial: number,
    strength:number,
    petrol:number
}

type Car = {
    name:string,
    counNumber:number,
    date:string,
    kelometr:number,
    mator: Mator,
}


let puple:string[]=[]

type Puple = {
    name: string[]
}

type LessonRoom = {
    name:string,
    class:string,
    puple:Puple,
    teacherName:string,
}




























export {}