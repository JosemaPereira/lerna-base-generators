export const messageMock = { message: "Server On" };

export const MainServicesMock = {
    get: async() => {
        return messageMock;
    }
};