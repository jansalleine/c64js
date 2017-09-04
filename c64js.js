const   BLACK               = 0x00,
        WHITE               = 0x01,
        RED                 = 0x02,
        CYAN                = 0x03,
        PURPLE              = 0x04,
        GREEN               = 0x05,
        BLUE                = 0x06,
        YELLOW              = 0x07,
        ORANGE              = 0x08,
        BROWN               = 0x09,
        PINK                = 0x0A,
        DARK_GREY           = 0x0B,
        GREY                = 0x0C,
        LIGHT_GREEN         = 0x0D,
        LIGHT_BLUE          = 0x0E,
        LIGHT_GREY          = 0x0F;

const   SCREENSIZEX         = 404,
        SCREENSIZEY         = 312;

const   OFFSETX             = 0x1f7 - 0x1e0 + 1;

function Palette16 ()
{
    return
    [
        "#000000", "#ffffff", "#bc5241", "#8feffb",
        "#b956eb", "#7edb40", "#553fe4", "#ffff77",
        "#c17b1d", "#826300", "#f49486", "#727272",
        "#a4a4a4", "#cdff98", "#9e8dff", "#d5d5d5"
    ];
}

function Charset ()
{
    return
    [
        0x3c, 0x66, 0x6e, 0x6e, 0x60, 0x62, 0x3c, 0x00, 0x18, 0x3c, 0x66, 0x7e,
        0x66, 0x66, 0x66, 0x00, 0x7c, 0x66, 0x66, 0x7c, 0x66, 0x66, 0x7c, 0x00,
        0x3c, 0x66, 0x60, 0x60, 0x60, 0x66, 0x3c, 0x00, 0x78, 0x6c, 0x66, 0x66,
        0x66, 0x6c, 0x78, 0x00, 0x7e, 0x60, 0x60, 0x78, 0x60, 0x60, 0x7e, 0x00,
        0x7e, 0x60, 0x60, 0x78, 0x60, 0x60, 0x60, 0x00, 0x3c, 0x66, 0x60, 0x6e,
        0x66, 0x66, 0x3c, 0x00, 0x66, 0x66, 0x66, 0x7e, 0x66, 0x66, 0x66, 0x00,
        0x3c, 0x18, 0x18, 0x18, 0x18, 0x18, 0x3c, 0x00, 0x1e, 0x0c, 0x0c, 0x0c,
        0x0c, 0x6c, 0x38, 0x00, 0x66, 0x6c, 0x78, 0x70, 0x78, 0x6c, 0x66, 0x00,
        0x60, 0x60, 0x60, 0x60, 0x60, 0x60, 0x7e, 0x00, 0x63, 0x77, 0x7f, 0x6b,
        0x63, 0x63, 0x63, 0x00, 0x66, 0x76, 0x7e, 0x7e, 0x6e, 0x66, 0x66, 0x00,
        0x3c, 0x66, 0x66, 0x66, 0x66, 0x66, 0x3c, 0x00, 0x7c, 0x66, 0x66, 0x7c,
        0x60, 0x60, 0x60, 0x00, 0x3c, 0x66, 0x66, 0x66, 0x66, 0x3c, 0x0e, 0x00,
        0x7c, 0x66, 0x66, 0x7c, 0x78, 0x6c, 0x66, 0x00, 0x3c, 0x66, 0x60, 0x3c,
        0x06, 0x66, 0x3c, 0x00, 0x7e, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x00,
        0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x3c, 0x00, 0x66, 0x66, 0x66, 0x66,
        0x66, 0x3c, 0x18, 0x00, 0x63, 0x63, 0x63, 0x6b, 0x7f, 0x77, 0x63, 0x00,
        0x66, 0x66, 0x3c, 0x18, 0x3c, 0x66, 0x66, 0x00, 0x66, 0x66, 0x66, 0x3c,
        0x18, 0x18, 0x18, 0x00, 0x7e, 0x06, 0x0c, 0x18, 0x30, 0x60, 0x7e, 0x00,
        0x3c, 0x30, 0x30, 0x30, 0x30, 0x30, 0x3c, 0x00, 0x0c, 0x12, 0x30, 0x7c,
        0x30, 0x62, 0xfc, 0x00, 0x3c, 0x0c, 0x0c, 0x0c, 0x0c, 0x0c, 0x3c, 0x00,
        0x00, 0x18, 0x3c, 0x7e, 0x18, 0x18, 0x18, 0x18, 0x00, 0x10, 0x30, 0x7f,
        0x7f, 0x30, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x18, 0x18, 0x18, 0x18, 0x00, 0x00, 0x18, 0x00, 0x66, 0x66, 0x66, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x66, 0x66, 0xff, 0x66, 0xff, 0x66, 0x66, 0x00,
        0x18, 0x3e, 0x60, 0x3c, 0x06, 0x7c, 0x18, 0x00, 0x62, 0x66, 0x0c, 0x18,
        0x30, 0x66, 0x46, 0x00, 0x3c, 0x66, 0x3c, 0x38, 0x67, 0x66, 0x3f, 0x00,
        0x06, 0x0c, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0c, 0x18, 0x30, 0x30,
        0x30, 0x18, 0x0c, 0x00, 0x30, 0x18, 0x0c, 0x0c, 0x0c, 0x18, 0x30, 0x00,
        0x00, 0x66, 0x3c, 0xff, 0x3c, 0x66, 0x00, 0x00, 0x00, 0x18, 0x18, 0x7e,
        0x18, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x18, 0x18, 0x30,
        0x00, 0x00, 0x00, 0x7e, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x18, 0x18, 0x00, 0x00, 0x03, 0x06, 0x0c, 0x18, 0x30, 0x60, 0x00,
        0x3c, 0x66, 0x6e, 0x76, 0x66, 0x66, 0x3c, 0x00, 0x18, 0x18, 0x38, 0x18,
        0x18, 0x18, 0x7e, 0x00, 0x3c, 0x66, 0x06, 0x0c, 0x30, 0x60, 0x7e, 0x00,
        0x3c, 0x66, 0x06, 0x1c, 0x06, 0x66, 0x3c, 0x00, 0x06, 0x0e, 0x1e, 0x66,
        0x7f, 0x06, 0x06, 0x00, 0x7e, 0x60, 0x7c, 0x06, 0x06, 0x66, 0x3c, 0x00,
        0x3c, 0x66, 0x60, 0x7c, 0x66, 0x66, 0x3c, 0x00, 0x7e, 0x66, 0x0c, 0x18,
        0x18, 0x18, 0x18, 0x00, 0x3c, 0x66, 0x66, 0x3c, 0x66, 0x66, 0x3c, 0x00,
        0x3c, 0x66, 0x66, 0x3e, 0x06, 0x66, 0x3c, 0x00, 0x00, 0x00, 0x18, 0x00,
        0x00, 0x18, 0x00, 0x00, 0x00, 0x00, 0x18, 0x00, 0x00, 0x18, 0x18, 0x30,
        0x0e, 0x18, 0x30, 0x60, 0x30, 0x18, 0x0e, 0x00, 0x00, 0x00, 0x7e, 0x00,
        0x7e, 0x00, 0x00, 0x00, 0x70, 0x18, 0x0c, 0x06, 0x0c, 0x18, 0x70, 0x00,
        0x3c, 0x66, 0x06, 0x0c, 0x18, 0x00, 0x18, 0x00, 0x00, 0x00, 0x00, 0xff,
        0xff, 0x00, 0x00, 0x00, 0x08, 0x1c, 0x3e, 0x7f, 0x7f, 0x1c, 0x3e, 0x00,
        0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x00, 0x00, 0x00, 0xff,
        0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0x00, 0x00, 0x00, 0x00,
        0x00, 0xff, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0xff, 0xff, 0x00, 0x00, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30,
        0x0c, 0x0c, 0x0c, 0x0c, 0x0c, 0x0c, 0x0c, 0x0c, 0x00, 0x00, 0x00, 0xe0,
        0xf0, 0x38, 0x18, 0x18, 0x18, 0x18, 0x1c, 0x0f, 0x07, 0x00, 0x00, 0x00,
        0x18, 0x18, 0x38, 0xf0, 0xe0, 0x00, 0x00, 0x00, 0xc0, 0xc0, 0xc0, 0xc0,
        0xc0, 0xc0, 0xff, 0xff, 0xc0, 0xe0, 0x70, 0x38, 0x1c, 0x0e, 0x07, 0x03,
        0x03, 0x07, 0x0e, 0x1c, 0x38, 0x70, 0xe0, 0xc0, 0xff, 0xff, 0xc0, 0xc0,
        0xc0, 0xc0, 0xc0, 0xc0, 0xff, 0xff, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03,
        0x00, 0x3c, 0x7e, 0x7e, 0x7e, 0x7e, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0xff, 0xff, 0x00, 0x36, 0x7f, 0x7f, 0x7f, 0x3e, 0x1c, 0x08, 0x00,
        0x60, 0x60, 0x60, 0x60, 0x60, 0x60, 0x60, 0x60, 0x00, 0x00, 0x00, 0x07,
        0x0f, 0x1c, 0x18, 0x18, 0xc3, 0xe7, 0x7e, 0x3c, 0x3c, 0x7e, 0xe7, 0xc3,
        0x00, 0x3c, 0x7e, 0x66, 0x66, 0x7e, 0x3c, 0x00, 0x18, 0x18, 0x66, 0x66,
        0x18, 0x18, 0x3c, 0x00, 0x06, 0x06, 0x06, 0x06, 0x06, 0x06, 0x06, 0x06,
        0x08, 0x1c, 0x3e, 0x7f, 0x3e, 0x1c, 0x08, 0x00, 0x18, 0x18, 0x18, 0xff,
        0xff, 0x18, 0x18, 0x18, 0xc0, 0xc0, 0x30, 0x30, 0xc0, 0xc0, 0x30, 0x30,
        0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x00, 0x00, 0x03, 0x3e,
        0x76, 0x36, 0x36, 0x00, 0xff, 0x7f, 0x3f, 0x1f, 0x0f, 0x07, 0x03, 0x01,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf0, 0xf0, 0xf0, 0xf0,
        0xf0, 0xf0, 0xf0, 0xf0, 0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff,
        0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0xff, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0,
        0xcc, 0xcc, 0x33, 0x33, 0xcc, 0xcc, 0x33, 0x33, 0x03, 0x03, 0x03, 0x03,
        0x03, 0x03, 0x03, 0x03, 0x00, 0x00, 0x00, 0x00, 0xcc, 0xcc, 0x33, 0x33,
        0xff, 0xfe, 0xfc, 0xf8, 0xf0, 0xe0, 0xc0, 0x80, 0x03, 0x03, 0x03, 0x03,
        0x03, 0x03, 0x03, 0x03, 0x18, 0x18, 0x18, 0x1f, 0x1f, 0x18, 0x18, 0x18,
        0x00, 0x00, 0x00, 0x00, 0x0f, 0x0f, 0x0f, 0x0f, 0x18, 0x18, 0x18, 0x1f,
        0x1f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf8, 0xf8, 0x18, 0x18, 0x18,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0x00, 0x00, 0x00, 0x1f,
        0x1f, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0xff, 0xff, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0xff, 0xff, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0xf8,
        0xf8, 0x18, 0x18, 0x18, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0,
        0xe0, 0xe0, 0xe0, 0xe0, 0xe0, 0xe0, 0xe0, 0xe0, 0x07, 0x07, 0x07, 0x07,
        0x07, 0x07, 0x07, 0x07, 0xff, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0xff, 0xff, 0xff, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0xff, 0xff,
        0x00, 0x00, 0x00, 0x00, 0xf0, 0xf0, 0xf0, 0xf0, 0x0f, 0x0f, 0x0f, 0x0f,
        0x00, 0x00, 0x00, 0x00, 0x18, 0x18, 0x18, 0xf8, 0xf8, 0x00, 0x00, 0x00,
        0xf0, 0xf0, 0xf0, 0xf0, 0x00, 0x00, 0x00, 0x00, 0xf0, 0xf0, 0xf0, 0xf0,
        0x0f, 0x0f, 0x0f, 0x0f, 0xc3, 0x99, 0x91, 0x91, 0x9f, 0x99, 0xc3, 0xff,
        0xe7, 0xc3, 0x99, 0x81, 0x99, 0x99, 0x99, 0xff, 0x83, 0x99, 0x99, 0x83,
        0x99, 0x99, 0x83, 0xff, 0xc3, 0x99, 0x9f, 0x9f, 0x9f, 0x99, 0xc3, 0xff,
        0x87, 0x93, 0x99, 0x99, 0x99, 0x93, 0x87, 0xff, 0x81, 0x9f, 0x9f, 0x87,
        0x9f, 0x9f, 0x81, 0xff, 0x81, 0x9f, 0x9f, 0x87, 0x9f, 0x9f, 0x9f, 0xff,
        0xc3, 0x99, 0x9f, 0x91, 0x99, 0x99, 0xc3, 0xff, 0x99, 0x99, 0x99, 0x81,
        0x99, 0x99, 0x99, 0xff, 0xc3, 0xe7, 0xe7, 0xe7, 0xe7, 0xe7, 0xc3, 0xff,
        0xe1, 0xf3, 0xf3, 0xf3, 0xf3, 0x93, 0xc7, 0xff, 0x99, 0x93, 0x87, 0x8f,
        0x87, 0x93, 0x99, 0xff, 0x9f, 0x9f, 0x9f, 0x9f, 0x9f, 0x9f, 0x81, 0xff,
        0x9c, 0x88, 0x80, 0x94, 0x9c, 0x9c, 0x9c, 0xff, 0x99, 0x89, 0x81, 0x81,
        0x91, 0x99, 0x99, 0xff, 0xc3, 0x99, 0x99, 0x99, 0x99, 0x99, 0xc3, 0xff,
        0x83, 0x99, 0x99, 0x83, 0x9f, 0x9f, 0x9f, 0xff, 0xc3, 0x99, 0x99, 0x99,
        0x99, 0xc3, 0xf1, 0xff, 0x83, 0x99, 0x99, 0x83, 0x87, 0x93, 0x99, 0xff,
        0xc3, 0x99, 0x9f, 0xc3, 0xf9, 0x99, 0xc3, 0xff, 0x81, 0xe7, 0xe7, 0xe7,
        0xe7, 0xe7, 0xe7, 0xff, 0x99, 0x99, 0x99, 0x99, 0x99, 0x99, 0xc3, 0xff,
        0x99, 0x99, 0x99, 0x99, 0x99, 0xc3, 0xe7, 0xff, 0x9c, 0x9c, 0x9c, 0x94,
        0x80, 0x88, 0x9c, 0xff, 0x99, 0x99, 0xc3, 0xe7, 0xc3, 0x99, 0x99, 0xff,
        0x99, 0x99, 0x99, 0xc3, 0xe7, 0xe7, 0xe7, 0xff, 0x81, 0xf9, 0xf3, 0xe7,
        0xcf, 0x9f, 0x81, 0xff, 0xc3, 0xcf, 0xcf, 0xcf, 0xcf, 0xcf, 0xc3, 0xff,
        0xf3, 0xed, 0xcf, 0x83, 0xcf, 0x9d, 0x03, 0xff, 0xc3, 0xf3, 0xf3, 0xf3,
        0xf3, 0xf3, 0xc3, 0xff, 0xff, 0xe7, 0xc3, 0x81, 0xe7, 0xe7, 0xe7, 0xe7,
        0xff, 0xef, 0xcf, 0x80, 0x80, 0xcf, 0xef, 0xff, 0xff, 0xff, 0xff, 0xff,
        0xff, 0xff, 0xff, 0xff, 0xe7, 0xe7, 0xe7, 0xe7, 0xff, 0xff, 0xe7, 0xff,
        0x99, 0x99, 0x99, 0xff, 0xff, 0xff, 0xff, 0xff, 0x99, 0x99, 0x00, 0x99,
        0x00, 0x99, 0x99, 0xff, 0xe7, 0xc1, 0x9f, 0xc3, 0xf9, 0x83, 0xe7, 0xff,
        0x9d, 0x99, 0xf3, 0xe7, 0xcf, 0x99, 0xb9, 0xff, 0xc3, 0x99, 0xc3, 0xc7,
        0x98, 0x99, 0xc0, 0xff, 0xf9, 0xf3, 0xe7, 0xff, 0xff, 0xff, 0xff, 0xff,
        0xf3, 0xe7, 0xcf, 0xcf, 0xcf, 0xe7, 0xf3, 0xff, 0xcf, 0xe7, 0xf3, 0xf3,
        0xf3, 0xe7, 0xcf, 0xff, 0xff, 0x99, 0xc3, 0x00, 0xc3, 0x99, 0xff, 0xff,
        0xff, 0xe7, 0xe7, 0x81, 0xe7, 0xe7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
        0xff, 0xe7, 0xe7, 0xcf, 0xff, 0xff, 0xff, 0x81, 0xff, 0xff, 0xff, 0xff,
        0xff, 0xff, 0xff, 0xff, 0xff, 0xe7, 0xe7, 0xff, 0xff, 0xfc, 0xf9, 0xf3,
        0xe7, 0xcf, 0x9f, 0xff, 0xc3, 0x99, 0x91, 0x89, 0x99, 0x99, 0xc3, 0xff,
        0xe7, 0xe7, 0xc7, 0xe7, 0xe7, 0xe7, 0x81, 0xff, 0xc3, 0x99, 0xf9, 0xf3,
        0xcf, 0x9f, 0x81, 0xff, 0xc3, 0x99, 0xf9, 0xe3, 0xf9, 0x99, 0xc3, 0xff,
        0xf9, 0xf1, 0xe1, 0x99, 0x80, 0xf9, 0xf9, 0xff, 0x81, 0x9f, 0x83, 0xf9,
        0xf9, 0x99, 0xc3, 0xff, 0xc3, 0x99, 0x9f, 0x83, 0x99, 0x99, 0xc3, 0xff,
        0x81, 0x99, 0xf3, 0xe7, 0xe7, 0xe7, 0xe7, 0xff, 0xc3, 0x99, 0x99, 0xc3,
        0x99, 0x99, 0xc3, 0xff, 0xc3, 0x99, 0x99, 0xc1, 0xf9, 0x99, 0xc3, 0xff,
        0xff, 0xff, 0xe7, 0xff, 0xff, 0xe7, 0xff, 0xff, 0xff, 0xff, 0xe7, 0xff,
        0xff, 0xe7, 0xe7, 0xcf, 0xf1, 0xe7, 0xcf, 0x9f, 0xcf, 0xe7, 0xf1, 0xff,
        0xff, 0xff, 0x81, 0xff, 0x81, 0xff, 0xff, 0xff, 0x8f, 0xe7, 0xf3, 0xf9,
        0xf3, 0xe7, 0x8f, 0xff, 0xc3, 0x99, 0xf9, 0xf3, 0xe7, 0xff, 0xe7, 0xff,
        0xff, 0xff, 0xff, 0x00, 0x00, 0xff, 0xff, 0xff, 0xf7, 0xe3, 0xc1, 0x80,
        0x80, 0xe3, 0xc1, 0xff, 0xe7, 0xe7, 0xe7, 0xe7, 0xe7, 0xe7, 0xe7, 0xe7,
        0xff, 0xff, 0xff, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0x00, 0x00,
        0xff, 0xff, 0xff, 0xff, 0xff, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff,
        0xff, 0xff, 0xff, 0xff, 0x00, 0x00, 0xff, 0xff, 0xcf, 0xcf, 0xcf, 0xcf,
        0xcf, 0xcf, 0xcf, 0xcf, 0xf3, 0xf3, 0xf3, 0xf3, 0xf3, 0xf3, 0xf3, 0xf3,
        0xff, 0xff, 0xff, 0x1f, 0x0f, 0xc7, 0xe7, 0xe7, 0xe7, 0xe7, 0xe3, 0xf0,
        0xf8, 0xff, 0xff, 0xff, 0xe7, 0xe7, 0xc7, 0x0f, 0x1f, 0xff, 0xff, 0xff,
        0x3f, 0x3f, 0x3f, 0x3f, 0x3f, 0x3f, 0x00, 0x00, 0x3f, 0x1f, 0x8f, 0xc7,
        0xe3, 0xf1, 0xf8, 0xfc, 0xfc, 0xf8, 0xf1, 0xe3, 0xc7, 0x8f, 0x1f, 0x3f,
        0x00, 0x00, 0x3f, 0x3f, 0x3f, 0x3f, 0x3f, 0x3f, 0x00, 0x00, 0xfc, 0xfc,
        0xfc, 0xfc, 0xfc, 0xfc, 0xff, 0xc3, 0x81, 0x81, 0x81, 0x81, 0xc3, 0xff,
        0xff, 0xff, 0xff, 0xff, 0xff, 0x00, 0x00, 0xff, 0xc9, 0x80, 0x80, 0x80,
        0xc1, 0xe3, 0xf7, 0xff, 0x9f, 0x9f, 0x9f, 0x9f, 0x9f, 0x9f, 0x9f, 0x9f,
        0xff, 0xff, 0xff, 0xf8, 0xf0, 0xe3, 0xe7, 0xe7, 0x3c, 0x18, 0x81, 0xc3,
        0xc3, 0x81, 0x18, 0x3c, 0xff, 0xc3, 0x81, 0x99, 0x99, 0x81, 0xc3, 0xff,
        0xe7, 0xe7, 0x99, 0x99, 0xe7, 0xe7, 0xc3, 0xff, 0xf9, 0xf9, 0xf9, 0xf9,
        0xf9, 0xf9, 0xf9, 0xf9, 0xf7, 0xe3, 0xc1, 0x80, 0xc1, 0xe3, 0xf7, 0xff,
        0xe7, 0xe7, 0xe7, 0x00, 0x00, 0xe7, 0xe7, 0xe7, 0x3f, 0x3f, 0xcf, 0xcf,
        0x3f, 0x3f, 0xcf, 0xcf, 0xe7, 0xe7, 0xe7, 0xe7, 0xe7, 0xe7, 0xe7, 0xe7,
        0xff, 0xff, 0xfc, 0xc1, 0x89, 0xc9, 0xc9, 0xff, 0x00, 0x80, 0xc0, 0xe0,
        0xf0, 0xf8, 0xfc, 0xfe, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
        0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0xff, 0xff, 0xff, 0xff,
        0x00, 0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
        0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x00, 0x3f, 0x3f, 0x3f, 0x3f,
        0x3f, 0x3f, 0x3f, 0x3f, 0x33, 0x33, 0xcc, 0xcc, 0x33, 0x33, 0xcc, 0xcc,
        0xfc, 0xfc, 0xfc, 0xfc, 0xfc, 0xfc, 0xfc, 0xfc, 0xff, 0xff, 0xff, 0xff,
        0x33, 0x33, 0xcc, 0xcc, 0x00, 0x01, 0x03, 0x07, 0x0f, 0x1f, 0x3f, 0x7f,
        0xfc, 0xfc, 0xfc, 0xfc, 0xfc, 0xfc, 0xfc, 0xfc, 0xe7, 0xe7, 0xe7, 0xe0,
        0xe0, 0xe7, 0xe7, 0xe7, 0xff, 0xff, 0xff, 0xff, 0xf0, 0xf0, 0xf0, 0xf0,
        0xe7, 0xe7, 0xe7, 0xe0, 0xe0, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x07,
        0x07, 0xe7, 0xe7, 0xe7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x00, 0x00,
        0xff, 0xff, 0xff, 0xe0, 0xe0, 0xe7, 0xe7, 0xe7, 0xe7, 0xe7, 0xe7, 0x00,
        0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x00, 0x00, 0xe7, 0xe7, 0xe7,
        0xe7, 0xe7, 0xe7, 0x07, 0x07, 0xe7, 0xe7, 0xe7, 0x3f, 0x3f, 0x3f, 0x3f,
        0x3f, 0x3f, 0x3f, 0x3f, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f,
        0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0x00, 0x00, 0xff, 0xff,
        0xff, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff,
        0xff, 0xff, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0xfc, 0xfc, 0xfc, 0xfc,
        0xfc, 0xfc, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff, 0x0f, 0x0f, 0x0f, 0x0f,
        0xf0, 0xf0, 0xf0, 0xf0, 0xff, 0xff, 0xff, 0xff, 0xe7, 0xe7, 0xe7, 0x07,
        0x07, 0xff, 0xff, 0xff, 0x0f, 0x0f, 0x0f, 0x0f, 0xff, 0xff, 0xff, 0xff,
        0x0f, 0x0f, 0x0f, 0x0f, 0xf0, 0xf0, 0xf0, 0xf0
    ];
}

class Canvas
{
    constructor ( id )
    {
        let _ = this;
        _.id = id;
        _.parent = document.getElementById( _.id );
        _.elem = document.createElement( "canvas" );
        _.parent.appendChild( _.elem );
        _.width = SCREENSIZEX;
        _.height = SCREENSIZEY;
        _.context = _.elem.getContext( "2d" );
        _.palette = new Palette16();
        _.scale();
    }

    drawRect ( x, y, width, height, color )
    {
        let _ = this,
            xpos = x,
            ypos = y;
        _.context.fillStyle = _.palette[color];
        _.context.fillRect( xpos, ypos, width, height);
    }

    plotPixel ( x, y, color )
    {
        let _ = this,
            xpos = x,
            ypos = y;
        _.context.fillStyle = _.palette[color];
        _.context.fillRect( xpos, ypos, _.pixelSize, _.pixelSize);
    }

    scale ()
    {
        let _ = this,
            parentStyle = getComputedStyle( _.parent ),
            parentWidth =
                parseFloat( parentStyle.width )
              - parseFloat( parentStyle.paddingLeft )
              - parseFloat( parentStyle.paddingRight ),
            scale = floor( ( parentWidth / _.width ), 1 );
        _.elem.width = _.width * scale;
        _.elem.height = _.height * scale;
        _.pixelSize = scale / 2;
        _.context.scale( scale, scale );
    }
}

function floor (value, decimals)
{
    return Number( Math.floor( value + "e" + decimals ) + "e-" + decimals );
}

function OutputArea ( id )
{
    let _ = this;
    _.id = id;
    _.elem = document.getElementById( _.id );
}

OutputArea.prototype.write = function ( string )
{
    let _ = this;
    _.elem.innerText += string + "\n";
}

function GenerateXmap ()
{
    let string = "_.xmap = { \"in\" : { ";
    for ( let i = 0; i < 24; i++ )
    {
        string += "\"" + ( 0x1e0 + i ) + "\": \""+ i + "\", ";
    }
    for ( let i = 0; i < 0x17c; i++ )
    {
        string += "\"" + i + "\" : \"" + ( i + 24 ) + "\", ";
    }
    string += " \"404\" : \"380\" } , \"out\" : { ";
    for ( let i = 0; i < 24; i++ )
    {
        string += "\"" + i + "\": \"" + ( 0x1e0 + i ) + "\", ";
    }
    for ( let i = 0; i < 0x17c; i++ )
    {
        string += "\"" + ( i + 24 ) + "\" : \"" + i + "\", ";
    }
    string += " \"380\" : \"404\" } }; ";
    return string;
}

function Vic ()
{
    constructor ()
    {
        let _ = this;
        _.base = 0xD000;
        _.registers =
        [
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // $D000 - $D007
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // $D008 - $D00F
            0x00, 0x9B, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00, // $D010 - $D017
            0x14, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // $D018 - $D01F
            0x0E, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // $D020 - $D027
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00        // $D028 - $D02E
        ];
    }

    read ( register )
    {
        let _ = this;
        if ( register >= _.base )
        {
            register -= _.base;
        }
        return _.registers[ register ];
    }

    write ( register, value )
    {
        let _ = this;
        if ( register >= _.base )
        {
            register -= _.base;
        }
        _.registers[ register ] = value;
    }
}

class C64Screen
{
    constructor ( id )
    {
        let _ = this;
        _.canvas = new Canvas( id );
        _.init( LIGHT_BLUE, BLUE, LIGHT_BLUE );
    }

    init ( borderColor, backgroundColor, textColor )
    {
        let _ = this;
    }

    xToScreen ( x )
    {
        return x >= 480 ? x - 480 : x + 24;
    }

    screenToX ( x )
    {
        return x <= 23 ? 480 + x : x;
    }
}

let screen = new C64Screen( "canvas2d" );
