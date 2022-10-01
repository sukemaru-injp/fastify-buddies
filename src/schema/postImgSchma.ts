import { RouteShorthandOptions } from "fastify"
import { Static, Type } from '@sinclair/typebox';

const bodySchema = Type.Object({
  key: Type.String()
})

export const postImgSchema: RouteShorthandOptions = {
  schema: {
    body: bodySchema
  }
}