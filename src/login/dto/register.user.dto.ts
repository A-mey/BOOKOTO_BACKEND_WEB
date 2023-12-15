export type RegisterUserDTO = {
    TITLE : 1 | 2 | 3;
    EMAILID : string;
    PASSWORD : string;
    FIRSTNAME : string;
    LASTNAME? : string
    GENDER : 1 | 2;
    DOB : string;
}