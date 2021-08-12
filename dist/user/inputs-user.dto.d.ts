export declare class InputUserDto {
    name: string;
    surname: string;
    email: string;
    password: string;
    phone: string;
    role: string;
    companyId: string;
    credit: number;
    token: string;
    createdAt: string;
}
export declare class UpdateUserDto {
    name: string;
    surname: string;
    email: string;
    phone: string;
    role: string;
    companyId: string;
    credit: number;
}
declare const updateUserDto_base: import("@nestjs/common").Type<Partial<Omit<InputUserDto, "password" | "createdAt">>>;
export declare class updateUserDto extends updateUserDto_base {
    updatedAt: string;
}
export {};
