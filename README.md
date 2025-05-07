# tsdown-jsx-repro

## Steps to reproduce

```sh
pnpm i
pnpm build
```

Update to tsdown v0.11.0 or v0.11.1:

```sh
pnpm i tsdown@latest # or pnpm i tsdown@0.11.1
```

Then run `pnpm build` again.

## Expected behaviour

In tsdown v0.10.2, running `pnpm build` results in a successful build.

## Actual behaviour

Since tsdown v0.11.0-beta.2, running `pnpm build` results in the following error:

```sh
ℹ [ESM] Build start

  ERROR  Error: Build failed with 1 error:

...
...
```
