const MIN_COMPRESS_LENGTH=1024,MIN_TRANSPARENT_COMPRESS_LENGTH=102400;function shouldCompress(s,t,$){return!(!s.startsWith("image")||0===t||$&&t<1024||!$&&(s.endsWith("png")||s.endsWith("gif"))&&t<102400)}module.exports=shouldCompress;