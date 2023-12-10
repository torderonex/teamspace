export interface IBoard{
    id? : number;
    projectId : number;
    name : string;
    
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}