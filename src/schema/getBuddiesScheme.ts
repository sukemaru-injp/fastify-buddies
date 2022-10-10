import { RouteShorthandOptions } from "fastify"
import { Static, Type } from '@sinclair/typebox';

const ErrorResponse = Type.Object({
  message: Type.String(),
})

const Response = Type.Object({
  text: Type.String()
})

export const getBuddiesSchema = {
  schema: {
    params: Type.Object({
      key: Type.String(),
      text: Type.String()
    }),
    response: {
      200: Response,
      400: ErrorResponse,
    }
  }
} as const
