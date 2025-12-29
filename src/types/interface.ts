

export interface iSubscribe {
    email : string;
}


export interface iMail {
    name: string;
    email: string;
    content: string;
}

export interface iBlog {
    tags: any;
    _id: string,
    blogImage: string,
    author: string,
    title: string,
    details: string,
    createdAt: any,
}