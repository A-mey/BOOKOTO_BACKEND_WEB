export const Catch = (error: unknown) : string => {
    if (error instanceof Error) {
        return error.message;
    }
    return String(error);
};