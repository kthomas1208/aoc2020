import { day20, day20_2 } from "./index.ts";

const finalInput =
  `Tile 3041:
#..##.#...
..#....###
.#..#.#.##
..#.......
#.#..###.#
.#....#..#
.........#
#...##.###
#.....###.
...##..#..

Tile 1747:
##..######
#####...##
..#.....##
#...##.###
#........#
###.#..#.#
#.##...#..
#..#.....#
#.#..#...#
#.#.#..###

Tile 2887:
##....#..#
##....#...
#...#..#..
...###.#..
.....#.##.
.....#....
##.##....#
#.......#.
###....##.
##..##.#.#

Tile 3001:
##.#.#.#..
##...####.
##....#.##
....##....
.......##.
#..#..#...
###..#.#.#
###....###
####...###
##..##.#.#

Tile 2267:
##.#.#.###
##....#..#
#..#....#.
..#.##..#.
##..#..#..
...#......
#.#.#.....
##........
...#.#..##
..##.#..#.

Tile 2797:
#.##.#...#
.......#..
#....#....
##..##.#.#
#......##.
.#.##.#.##
#......##.
####....#.
#.##....#.
####.#.###

Tile 1087:
#.#######.
##..##..#.
#.......##
.....#....
##...#...#
#....#...#
.##......#
.#..#.#..#
#...#..##.
.##..##.##

Tile 2237:
.#..####..
...####.##
##...#..#.
#..#.#...#
##.#......
.##.#..#.#
.#..##...#
...#....##
.....##...
.....##..#

Tile 3673:
##.###...#
#.##..#..#
#..####...
.#.####...
.....#.#.#
#..#..#...
###.......
#.#.......
#.......#.
##..###..#

Tile 1907:
...#.#.###
#.##.....#
.......##.
.##.#...#.
..#.##....
##..##....
#.........
##.#......
.......#..
#.#.###...

Tile 2437:
#.##.##..#
....#.....
..#......#
#...#.....
...#......
.....#...#
#.#.......
.#...#...#
#.#....#..
.##..##...

Tile 2897:
##..#...#.
..###....#
...#.##...
....#.##..
...##.....
#..#..#.##
..###.....
...##..##.
#..#......
#.#.##..#.

Tile 1103:
.####.#..#
..##...#..
#.....#...
##.#.....#
#.##......
.##...#..#
##.....#.#
##.....###
#.....#...
##.#...##.

Tile 1559:
...##..#.#
#..###...#
...##...##
#..#.#.#..
#......#.#
#..#.#.#.#
.#..#....#
....#..###
..##..##..
.#..##..##

Tile 3931:
##....##.#
.##..#...#
.......#..
#....#.#..
#.#..##.#.
.##.####..
.......#.#
.....#.#..
.#.#......
####..#.##

Tile 3331:
#.#.####..
.#.##...##
....####.#
.##......#
#.##.##..#
##..#...#.
#.##....#.
#.#.#.#.#.
...#......
###.##.##.

Tile 2089:
..########
##.#...##.
#...#.....
##......##
##..##..#.
..#.#....#
#..##....#
#..#.#...#
##..#....#
..######.#

Tile 1069:
.####..###
......##..
....#.##.#
#..#.....#
#...#...#.
#...#.##.#
...#.#...#
#.#.......
#.#.##.#.#
#..#.#.#..

Tile 1831:
#..#..##..
#...##...#
..##...#.#
#.......##
#........#
..#.......
##..###..#
#....###.#
...#......
##..#.....

Tile 1453:
.#.#.#..##
##.##...##
#....#....
#..#..#.#.
##.#..###.
...##.##..
....##..##
...##..###
##........
..##.#####

Tile 3767:
..#.#.#.#.
..........
#....#.#.#
#.....#..#
##..#..#..
...#..#..#
..#....#..
......#...
#..##.....
.#....##.#

Tile 1693:
#.###..###
#...#...##
#......###
#....#...#
......#..#
###...#...
####..##..
...#..#...
##..##.###
#....#.##.

Tile 3631:
....#.##..
..#...#...
#.###..#..
....#.#..#
#..#..##..
#....#.#..
#.##..#...
#........#
.....#...#
...#......

Tile 2999:
#...###..#
#.#.##....
#.........
##.......#
#.#.##.###
.....##.##
.#.##..##.
#...###.##
.#.....#..
..#.#.###.

Tile 2417:
..#.#.#...
##.#..#.##
#.##....#.
#.........
...#..#...
.#...#.###
.#.###...#
#........#
#.#..#....
#.##.#...#

Tile 3919:
##........
#.#.......
.#.#.#....
...#...#.#
...#...##.
##.....###
#.#.#.#...
###.#.....
.#.#..#.##
##.#...##.

Tile 3557:
##.#.###..
.##...#..#
.#.#...#..
....###...
.....#####
###.#....#
.#..##..#.
#..#....#.
..........
....###.#.

Tile 3851:
.##.###.##
..#......#
......#..#
#.#.......
......##..
##...#....
..#..#...#
...#.#....
.........#
.#.##..###

Tile 1013:
##.##.##..
##........
...#......
#.....#...
#.#..#...#
.#......##
...##.#.##
..#..##..#
.#...#..#.
..#..###.#

Tile 1549:
..#...##.#
..#......#
##....#.#.
.......##.
..#...#..#
#.#..#..##
.......#.#
.......#.#
#...##...#
.######...

Tile 2179:
.##.##.#..
.##.###...
.........#
..#..#..#.
..#####...
...#..#..#
...#....##
#........#
#.........
###.###...

Tile 1697:
###..###.#
##...#....
####...#.#
.#.....##.
....####.#
#....##.##
..#.##...#
.........#
###..##.##
#..##.####

Tile 1307:
##......#.
..........
....#....#
#...#.#.#.
.###.....#
#..##.#..#
..........
.....##.#.
...####..#
..#..#.#..

Tile 3929:
###.#.##..
##........
###....###
...#..#..#
...#.....#
..#.###...
..........
.....#...#
#.......##
##....#.#.

Tile 1949:
..####.#.#
.#..#...#.
#..#....##
#.....###.
.........#
..#..#...#
.....##...
.....#....
.#.#.#.#..
####.#####

Tile 2081:
##.##.####
.#........
#...#.....
.#.##..#.#
....###..#
..#..#.#..
#.#.#.##.#
..#..#..#.
#...#.#...
.##.#.####

Tile 1433:
#####.##..
#.....#...
####..#...
...####...
......#.##
..##...#..
#...#.#.#.
#....#..#.
#......#.#
##..###..#

Tile 3433:
#.......##
#....#....
#...#.#..#
..#.##...#
#...##.#.#
##.####..#
..##.###.#
#.#....#..
##.#.....#
.#....#..#

Tile 3607:
##.#.#.#.#
...#..#.#.
#.#..#.#..
#.......##
..#..##...
#.....#...
#...#..#.#
...#....##
#..#..#.##
##.#..#.#.

Tile 2677:
.###..#..#
###......#
..........
##..#...#.
##...#.#..
..#.......
#...#...#.
#......#.#
##.#.#.#.#
###...#...

Tile 3461:
...##...##
#.#...##.#
#.....##..
#..#....##
#.#....#.#
..##.##.#.
#.........
..#.#....#
#....##...
.#.##.####

Tile 3911:
#.#####.##
#..#.....#
#..#......
.##....##.
#..#..#..#
.....#.#.#
#.......##
......#...
####...##.
..#..#.#..

Tile 2729:
##..##.##.
.#..#...#.
#....###..
.....##...
#..#..#..#
....###..#
#....##.##
#..#.###..
#.....#...
...##.#...

Tile 2549:
.#.##.#...
#..#.#.#.#
.........#
.#..##..##
#....##...
##..#.##.#
.#...##...
#...#.....
..#.......
#....#....

Tile 1699:
.######..#
....###..#
.####..#..
#....#....
.##.#...#.
#.......#.
.#.#.##..#
#..#......
..........
#.##..##..

Tile 2221:
#...##.#..
....#....#
#...#....#
#........#
#.......##
##.#..#...
#.#.###..#
#..#.....#
......#.##
..#.####.#

Tile 2129:
....#####.
.##..#...#
......#.##
#.#...#...
#..#...###
###.#..#..
.....#...#
...#......
#...#.#...
#.###.###.

Tile 1973:
.......###
..........
#.#.#.....
.........#
....#..#..
...#...#..
##.....#.#
#..#...#.#
#.#......#
#...#.#.##

Tile 3943:
...###....
........##
.##.......
##.#....##
..#.#..#..
..##...#..
#.##....#.
.#####.#..
###..##.#.
...#..#.##

Tile 1451:
#..###..#.
#..#....##
....#...##
##.......#
#.........
..........
...#...#..
..#....##.
...#..#.#.
.##...##.#

Tile 1759:
.#..##...#
##........
##..#.....
..........
.###...###
..##..#..#
.......###
#..#..#..#
.##....#..
...##.#..#

Tile 2963:
##.##.#.#.
....#.....
#.....##.#
.##.#..#.#
.###..#.#.
#.##.##...
....#....#
#.....#...
.#.##.###.
.#..#.....

Tile 3313:
#.#...#...
..##..#..#
#####.##.#
#.....##.#
..#..##..#
##.###....
...#.#....
.......#.#
##.....##.
#.#.#####.

Tile 3221:
.#...##...
#.##...###
####...##.
.##.......
##..#...#.
...#.#.###
#...##..#.
##...#..#.
#.#...##..
##...#.##.

Tile 3989:
###...#.##
#.......##
#.......#.
#...#....#
#.........
...#.##...
..#....#..
..........
.#......#.
#.##.###..

Tile 2069:
#..#..##.#
#.####....
#..#......
#..##..#.#
#......###
#...#.....
#...#..###
......##..
#..#.####.
#.#..#..#.

Tile 1871:
#.##..####
.#.##....#
###.#.#..#
#....#...#
......#.##
#.....####
#.....##.#
#...#....#
....#.....
.......#.#

Tile 2083:
.#.##.#...
#..####..#
##.#.##.##
..#.##....
#.#..##...
..#.#..#..
...#..#...
.#..#.##..
###..#.###
#...#.#...

Tile 2309:
.##.#...#.
#..##..#.#
...#......
.#..#.....
#..##...##
.#...#...#
...#.#....
.....##...
#.##....##
...##..###

Tile 3413:
.....####.
..#.###...
..#.#....#
##.##.....
..##...###
##..#.....
##.#.....#
###.######
#..##.....
#.#...#.#.

Tile 1039:
#.##.#.#..
#...#.#...
...####.#.
..#..#.#.#
...#.##..#
#...###..#
....#..#..
##....##.#
.#...#....
#...#.#..#

Tile 2029:
##..##.#..
#.........
#..#......
.##.......
.....#..#.
.##..##...
......#...
#....#.#.#
..##.#....
...#.#.#..

Tile 2281:
######.##.
#...##....
......#.#.
##..#.##..
#..####.##
#....#.#.#
#........#
........##
.##....##.
..###.....

Tile 3259:
#...##.#.#
...#....#.
..#.#...#.
###.......
.####.#.##
#..#...#.#
#....#.##.
#..###..#.
#.###..#.#
#.#...###.

Tile 2087:
###.###.#.
#.........
#.......#.
##....####
#.##...#..
#..##.#.##
.##...#...
.##..#..#.
#.....#...
##..#.#...

Tile 3391:
.##.#.#..#
##.#.#...#
#..#......
...#......
#..#......
..........
...###...#
.........#
##..#....#
..#.#....#

Tile 2693:
#...#.##..
#..##....#
.#.#....#.
#.#.#...#.
#.##.....#
...#......
..#.#.##.#
#.......#.
...#.....#
..###..##.

Tile 1279:
#.#.....##
.........#
#.#..#.#.#
#..#.....#
#..#......
###.....##
.###...#.#
#.##.....#
#.##......
.#..####..

Tile 2459:
####...#.#
#.#....#.#
#........#
.#........
##......#.
#...#.#..#
###....#..
..##.##..#
#.#.....##
#.#.#.....

Tile 2297:
.##.####..
#...#...##
##........
.##...#.#.
.....#.#.#
#........#
......#.#.
#...#...##
#.#.....##
.##..##..#

Tile 3217:
.##..##..#
#...#.#...
.#.##.#...
##.##....#
#...##..##
..###...#.
.........#
#..#.#....
.#..#...##
#....##..#

Tile 2467:
#.#.##.###
.....#...#
.#........
#...##.###
.#.......#
#...#.##.#
#....#....
#...#....#
...##.##.#
....#..#.#

Tile 2939:
##.###.#..
...#..#..#
.#..##....
#.#.......
##....#...
.##...##..
##.#.....#
#..#..#.##
..........
###..##.##

Tile 1459:
#.#.##.###
..##.#...#
#..#.#.##.
#....###..
##...#...#
.##.#.....
.##.#.##..
#.....#..#
#.#.##....
..#....##.

Tile 3583:
.#..#.#.##
#..###.#.#
.#....#...
.#.##....#
...#.....#
...#.#...#
....###...
.....#....
..#.......
.#.#.###..

Tile 3209:
#.#.######
.#....#.#.
..#.......
#.#.....##
#..#.....#
.#.......#
#.##.#....
....##....
.#.##.#.#.
#...#.#...

Tile 1471:
#.###..##.
........##
.#....##..
####.#...#
...#......
#....#....
#.....#.#.
#.#......#
##.#.##..#
.#.#.###.#

Tile 3533:
....#..#.#
###...#...
..#.#..#..
...#..#...
#.#.#..#.#
.#..##..#.
#..#.....#
.....#.#.#
........##
..#.#.##.#

Tile 2389:
.....##...
..#....#.#
....#...#.
#.....#...
#..#....##
#.#.#.....
#........#
#.........
....#.#...
....##..##

Tile 3023:
....#.###.
#...#.#.##
#.#.#.....
#..#.#..##
....#....#
....######
#...#.....
.#....#.##
#......#..
#.##...##.

Tile 1367:
.#...###..
#...##.##.
.#.....#.#
.#...#...#
####.#....
.##.......
.#.....#..
...#.....#
..#......#
###..#..#.

Tile 1789:
.##..#..##
....#.##..
.####.....
#...###..#
#..#..###.
.##.#.....
..#.##....
.....#....
.......#..
.#..##....

Tile 3011:
#.###..#.#
.....#...#
...#..#..#
#.###..#..
#..#.#..##
..##......
.#...#...#
...#..#...
.#.###...#
.#.##.....

Tile 3547:
.###.#...#
.##....#..
...#.##.##
#.#.......
.......#.#
......#..#
#..#...#..
...#.####.
#....##.#.
....#.##..

Tile 3671:
##.#..#.#.
##..##.#.#
...###....
#.#.###..#
#..#...#..
..#......#
#.#...####
.....#...#
.#...##..#
..###..#..

Tile 3529:
#.#.#..#.#
##.....#..
.##..#....
#.#....###
#.##.#..##
#....#.#.#
.....###.#
....#..#.#
.#..#....#
.###..##..

Tile 2251:
.####.#.##
#.....#...
.#...#.#.#
...##.....
##.......#
.....#....
...##....#
#..#..#...
#########.
#.........

Tile 2927:
.#...#####
.###..#...
...#...#..
##.#...##.
...#.....#
#.###...##
.....#..#.
#....###.#
#........#
.##..##...

Tile 3467:
#...#.#.##
.....#....
...###..##
#...#.#...
...#.#.#..
....#.....
.....#.#..
..#.#...#.
.....##...
#..#..#...

Tile 2341:
#.......##
..##..#.#.
.....##..#
#..###.#..
...##.....
##..#..#.#
###..#.#.#
.#..#..###
...#..##..
.#.#...###

Tile 1847:
#..##..###
#....#.#.#
.#..###...
#....#...#
#.#..##..#
##.####...
#.#.......
..........
.#..#...##
##..#..##.

Tile 1597:
#.#.#....#
#......###
.#..#....#
.#....####
#.#..#..##
#...#..#.#
#.##.##..#
###...#...
#..##.#...
.###..#.#.

Tile 2789:
.#####.#..
....#.....
.........#
#.##....#.
..#.#.#...
#...##....
#..#...#.#
#..#.....#
.....#....
.#..####.#

Tile 2441:
##.#.#....
#.#.......
.#...###..
..#....##.
.......#.#
.......#..
.#...##..#
####......
##..#....#
##.##.###.

Tile 1303:
.##...#...
#........#
###....#.#
.....#....
.....#....
#.....#..#
.........#
.####.#..#
..##...###
####..###.

Tile 2339:
..#..##.##
...#....##
##.#.#....
#..##.##.#
.####..#.#
#.........
.#...#..#.
......#..#
#..###...#
.##..#.#.#

Tile 3079:
####...#.#
...###..##
.........#
.##....#..
##..#..#..
...#..##.#
#.#....#..
##........
#.#.####..
###.#.#..#

Tile 1877:
..#.#.#..#
#.#.#.#...
#....##...
..##.#..##
##.#..#...
#..#......
#...#.#..#
.....###.#
..#..##..#
########.#

Tile 2663:
##.##....#
#......##.
#.#...#..#
##.###....
##..#.#.##
#...#..#..
#..#....#.
..#.#...##
#..##...##
.....###.#

Tile 1109:
###....##.
#........#
#.........
...#..####
..##..##.#
.....##..#
.#...#.#.#
#...#...##
..........
...#.#.###

Tile 2971:
...##.####
#..#....##
#...#.#.#.
#...#.##.#
...#.....#
.#........
#.....#.#.
.#####.#.#
##..#...#.
###.#..#.#

Tile 2053:
.###.###..
####.#..##
..#...##..
##....##.#
#.#..#.###
..#.......
.#.##...#.
#...##..##
..#...#..#
#.#....###

Tile 2647:
.###.#.###
#........#
#....#..##
........#.
##....##.#
##....##..
....#..#.#
...#.....#
##.......#
##.#...#.#

Tile 1423:
####.#....
#.....#...
#.#....#.#
...#.....#
..#.......
#.#.......
##..#....#
##.##.#...
#...#.....
...#.##.##

Tile 2767:
..#.##..##
#...#..#.#
#.#....#..
#.......#.
.......#..
.#...#.#.#
.##.#..#..
.....##..#
#.......##
##....####

Tile 2203:
.#...##.##
#.##...#.#
.#........
...#.##..#
###....###
.#.....#.#
#.#.##...#
...#.#.#..
.....#....
#.####.##.

Tile 1667:
....#.##.#
#..#...#..
.#...#...#
.#........
.#........
...#.....#
..#..#...#
##...####.
.#.....#..
#..#......

Tile 2633:
.#.#######
#..###....
........#.
#.........
.....##.#.
#.#......#
#.#.......
..##.....#
....##....
.#..####.#

Tile 3539:
####.##..#
..##....#.
..#.#.##.#
...#.....#
#.........
.......#.#
...#....#.
###..####.
.##......#
..#..#####

Tile 2381:
.######...
##..###...
#......#.#
........##
.#.....#.#
##..##...#
.#.......#
#.........
...##....#
....##...#

Tile 1153:
..##.##..#
.....##.#.
.....##...
..#.....##
##.#..#...
#.....#..#
#....#..#.
#....#.#..
..#..#..#.
.#.##.....

Tile 2011:
#.##..#...
#.##.....#
...#..#...
###.......
#....#..#.
..##......
##..#..#..
..##....##
#..#..#...
##.####..#

Tile 2731:
........#.
#........#
##.#.....#
#.....##..
#.....#...
#.#......#
...#.###.#
#.#.#....#
.#.#...#.#
#...###..#

Tile 3643:
.#...#.###
..#...#..#
#....##..#
...##.#.#.
.#.....#..
...#.##..#
.####.##..
#..#..####
....#....#
####.####.

Tile 2917:
..########
#......#.#
#..#.#..##
#...#...##
#..##....#
...#..#...
..#......#
...#...#.#
#.....#..#
.#.#..####

Tile 1951:
#.#.#..##.
..........
..#.#.#.##
#.#.......
.#..#...##
...##..#.#
#...#..#..
.#..#.....
#.#.....##
.#####....

Tile 2593:
..#####.#.
.#...#....
##..###..#
###.##..##
.#....##.#
.#..##....
#.#..#..##
.....#....
.....#...#
.####..#..

Tile 2953:
..#..#.#.#
...#..#...
##.....#.#
......#..#
#........#
..#..#...#
#.........
###.#.##..
##..#..#..
.###.#..#.

Tile 3769:
......#...
.#.##.#...
.##......#
##........
#.....###.
....#...#.
..........
#.....#.##
..........
.##..##.##

Tile 2423:
####..#.##
.#..##....
#.#.#.....
.........#
..........
..#..#....
.#.#..#..#
#.........
#..#..#...
##.#......

Tile 3329:
..#####.#.
.#....##.#
###..#####
##...#...#
#.........
#.........
...#.#...#
....#...##
#...#.#...
#.........

Tile 1249:
..#..###.#
......#.#.
##...#....
..........
##.......#
#......#.#
#..#.#..##
.#.......#
###....#.#
.##.....#.

Tile 3343:
##..#...#.
##.#..####
........#.
...#......
......#...
#.....#...
.#.#.#....
......##.#
..#.##...#
.#.#..####

Tile 2017:
##.##.#.##
...#......
.....##.#.
..#...#...
#.#....#..
#....#...#
#....#...#
#...##....
.....#.#.#
....#.#.#.

Tile 1151:
##..##....
..##.....#
#.####.##.
...##....#
..##.....#
....#....#
.#.##...##
......#..#
#..#.#.#..
#.###...##

Tile 3697:
###.....#.
..##...##.
......#.#.
.#...#.#.#
.#...#...#
.#.....#..
#...#.#...
#..#....#.
.#..##...#
..#.#.##..

Tile 1487:
..#####.##
#.........
#.#...#.##
##.##.....
.##.#....#
..#....###
#.........
..#.......
#.##..#...
.####..##.

Tile 1481:
..#..#..##
#.#..#.##.
#..##....#
##.....#..
.#...##.##
.#......#.
..#..##...
###...###.
..#...##..
#...##.#..

Tile 2903:
#..#...###
#..#####.#
..#.......
###..###..
.#........
#.#.#....#
..#..#.###
##..#.##..
...#......
.##.##.#..

Tile 1171:
.###..####
....#..#..
....#..#.#
#.....##.#
##...##...
#..#.##.#.
##..##...#
#..##.#.#.
#.#..##.#.
##.##....#

Tile 2621:
#...###.##
.#.....##.
.#..#...#.
...#..#.##
.#..##..#.
##..#..##.
...##...#.
.#..#...##
....#....#
...##.####

Tile 2671:
...#####..
........##
#....##..#
##........
##..##.#..
..#.....#.
#.........
..##.....#
##....#.##
###.#...##

Tile 2357:
.##.##....
#...#....#
...##..#.#
#.##...#..
##.###..##
..#..#####
...#.###.#
...##....#
..#.####.#
#..##..###

Tile 3617:
...##.#...
#####..#.#
....#....#
......#..#
#...#.....
...##....#
....#.....
#..#...##.
#...#...#.
....##...#

Tile 3517:
#.#..#..#.
#......#.#
.#.#..#.##
...##...#.
#.##..##..
...#..#.##
#...#.##..
.#..#..#.#
....#...##
..###.###.

Tile 1499:
.#..#....#
...#.##..#
#...#..#..
..##...#..
#....#.#.#
#..#.#..##
##.##..#.#
.##.#..#.#
#.###..##.
##.##.#.#.

Tile 3581:
###.#.###.
.#..#....#
###....##.
..#.#...##
##..#..#..
.....##...
........#.
.#.....##.
#.#...##..
###.#.#..#

Tile 2687:
.#####...#
.......#..
.#..#....#
...#......
##....#..#
#.#..#..#.
##..#.#.#.
..#....###
.#........
#...#..#..

Tile 1657:
...#...#.#
.#.##.#..#
....#...#.
...##.##..
....#.#.##
#..#..#.#.
...#.#.#..
...##....#
#...#.#..#
.##.##...#

Tile 3449:
#.....###.
#..#.....#
#......##.
....#.....
##....#...
.....#...#
..........
#......###
.#....#...
###...#...

Tile 3797:
#.#######.
..#.##.###
...#.#...#
##.##.##.#
#.......#.
.#......##
##...#####
..#.##.###
#.#.##...#
##..#.#.#.

Tile 1511:
#.###.###.
.##.#....#
........##
##..#..#..
..#####.##
.....#....
.......#..
...#......
##........
...#.#####

Tile 2311:
..#.####..
......#..#
.###..#.#.
##..#.###.
...#...#..
.......###
##.#......
.####...##
##.##..###
#...#..###

Tile 1123:
.##.##....
#....##...
#..#.....#
#........#
....#.....
#...##.#.#
#.#.##..##
...#...##.
#..#...#..
##.#.#.###
`;

const testInput =
  `Tile 2311:
..##.#..#.
##..#.....
#...##..#.
####.#...#
##.##.###.
##...#.###
.#.#.#..##
..#....#..
###...#.#.
..###..###

Tile 1951:
#.##...##.
#.####...#
.....#..##
#...######
.##.#....#
.###.#####
###.##.##.
.###....#.
..#.#..#.#
#...##.#..

Tile 1171:
####...##.
#..##.#..#
##.#..#.#.
.###.####.
..###.####
.##....##.
.#...####.
#.##.####.
####..#...
.....##...

Tile 1427:
###.##.#..
.#..#.##..
.#.##.#..#
#.#.#.##.#
....#...##
...##..##.
...#.#####
.#.####.#.
..#..###.#
..##.#..#.

Tile 1489:
##.#.#....
..##...#..
.##..##...
..#...#...
#####...#.
#..#.#.#.#
...#.#.#..
##.#...##.
..##.##.##
###.##.#..

Tile 2473:
#....####.
#..#.##...
#.##..#...
######.#.#
.#...#.#.#
.#########
.###.#..#.
########.#
##...##.#.
..###.#.#.

Tile 2971:
..#.#....#
#...###...
#.#.###...
##.##..#..
.#####..##
.#..####.#
#..#.#..#.
..####.###
..#.#.###.
...#.#.#.#

Tile 2729:
...#.#.#.#
####.#....
..#.#.....
....#..#.#
.##..##.#.
.#.####...
####.#.#..
##.####...
##..#.##..
#.##...##.

Tile 3079:
#.#.#####.
.#..######
..#.......
######....
####.#..#.
.#...#.##.
#.#####.##
..#.###...
..#.......
..#.###...`;

/** PART 1 --------------------------------------------*/
test("1.1 - should return value", () => {
  let result = day20(testInput.split('\n\n'));
  expect(result).toBe(20899048083289);
});

// test("1.Final - should return value", () => {
//   let result = day20(finalInput.split('\n\n'));
//   expect(result).toBe(0);
// });

/** PART 2 --------------------------------------------*/
// test("2.1 - should return value", () => {
//   let result = day20_2(testInput.split('\n'));
//   expect(result).toBe(231);
// });
// test("2.2 - should return value", () => {
//   let result = day20_2(testInput2.split('\n'));
//   expect(result).toBe(46);
// });
// test("2.3 - should return value", () => {
//   let result = day20_2(testInput3.split('\n'));
//   expect(result).toBe(1445);
// });
// test("2.4 - should return value", () => {
//   let result = day20_2(testInput4.split('\n'));
//   expect(result).toBe(669060);
// });
// test("2.5 - should return value", () => {
//   let result = day20_2(testInput5.split('\n'));
//   expect(result).toBe(23340);
// });
// test("2.Final - should return value", () => {
//   let result = day20_2(finalInput.split('\n'));
//   expect(result).toBe(55699621957369);
// });