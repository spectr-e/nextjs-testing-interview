/**
 * Polyfills needed by MSW v2 in jest-environment-jsdom.
 * This file runs via `setupFiles` BEFORE test framework + MSW load.
 * Uses require() to avoid import hoisting issues.
 *
 * jest-environment-jsdom doesn't expose many Web APIs that MSW needs.
 * Node.js 18+ provides these APIs natively, so we pull them in.
 */

/* eslint-disable @typescript-eslint/no-require-imports */

// TextEncoder/TextDecoder from node:util
const { TextDecoder, TextEncoder } = require("node:util");

// Web Streams from node:stream/web
const { ReadableStream, WritableStream, TransformStream } = require("node:stream/web");

// BroadcastChannel from node:worker_threads
const { BroadcastChannel } = require("node:worker_threads");

Object.assign(globalThis, {
  TextDecoder,
  TextEncoder,
  ReadableStream,
  WritableStream,
  TransformStream,
  BroadcastChannel,
});
