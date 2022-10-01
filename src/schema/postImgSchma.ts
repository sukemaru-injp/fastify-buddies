import { RouteShorthandOptions } from "fastify"
import { Static, Type } from '@sinclair/typebox';

export const postImgSchema = {
  schema: {
    body: Type.Object({
      key: Type.String()
    })
  }
} as const
