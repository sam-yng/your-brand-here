export function assertSupportedNodeVersion(version: string) {
  const nodeMajor = Number.parseInt(version.split(".")[0] ?? "", 10);

  if (nodeMajor !== 24) {
    throw new Error(
      `Your Brand Here builds require Node 24; received ${version}. Use .nvmrc or .node-version before adapter-vercel initializes.`,
    );
  }
}
