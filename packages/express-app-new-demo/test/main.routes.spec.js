import { mainRoute } from "../app/routes";
import assert from "assert";
import testServer from "./testServer";
import { messageMock } from "./mocks/routes/main.routes";
describe("Main Routes", () => {
    const request = testServer(mainRoute);

    describe("GET /", () => {
        it("should respond with 200", (done) => {
            request.get("/").expect(200);
            done();
        });
    });

    describe("GET /", () => {
        it("should respond default message", (done) => {
            request.get("/").end((err, res) => {
                assert.deepEqual(res.body, messageMock);
            });
            done();
        });
    });
});