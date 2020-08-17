# Animation of SHA 256 algorithms

Console application for SHA 256 algorithm.

## Installation

### Via [npm](https://www.npmjs.com)

```zsh
npm install -g sha256-animation
```

Or run the package direcly through npx

```zsh
npx sha256-animation <MESSAGE>
```

### Via source

```zsh
git clone https://github.com/scott-dlai/sha256-animation.git
cd sha256-animation
npm install && npm run build
```

## Usage

```zsh
sha256-animation <MESSAGE>
```

### Without animation

```zsh
sha256-animation --no-animation <MESSAGE>
```

### Set the speed of animation

```zsh
sha256-animation --set-speed <fast | slow> <MESSAGE>
```

## Acknowledgement

This project is greatly inspired by [in3rsha's project](https://github.com/in3rsha/sha256-animation)
