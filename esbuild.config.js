import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['./src/lib.js'],
  bundle: true,
  minify: true,
  sourcemap: true,
  format:'iife',
  outfile: './dist/nlpdates.min.js',
})
