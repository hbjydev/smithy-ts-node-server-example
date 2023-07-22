import { createServer } from "http";
import { convertRequest, writeResponse } from "@aws-smithy/server-node";
import { weatherServiceHandler } from "./api/services/weather";

const server = createServer(async (req, res) => {
    const httpRequest = convertRequest(req);

    const httpResponse = await weatherServiceHandler.handle(httpRequest, {});

    return writeResponse(httpResponse, res);
})

server.listen(3000);
console.error("Listening on *:3000");
