const levels = [
  {
    stage: `
  ###
  #.#
  # ####
###$ $.#
#. $@###
####$#
   #.#
   ###
`,
    solution: "DuLLrUUdrR",
  },
  {
    stage: `
#####
#@  #
# $$# ###
# $ # #.#
### ###.#
 ##    .#
 #   #  #
 #   ####
 #####
`,
    solution:
      "rrDDDDrddlluRdrUluuuuulldRurDDDDRRRdrUUdlllddlluRdrUluuuulldRurDDDRRRdrUlllddlluRdrUluRRR",
  },
  {
    stage: ` 
 #######
 #     ###
##$###   #
# @ $  $ #
# ..# $ ##
##..#   #
 ########
`,
    solution:
      "rRRddrruULuullllDDDuuurrrrddLLLrrruulllldDrrrrrruLdlllllldRuuurrrrDrdLLLLDurrruulllldDldRurrrddrUruLLLLrrruulllldD",
  },
  {
    stage: ` 
 ####
##  #
#@$ #
##$ ##
## $ #
#.$  #
#..*.#
######
`,
    solution: "RDrDrddLLrruulDLdRuuulDDuuuurDDDD",
  },
  {
    stage: ` 
 #####
 #@ ###
 # $  #
### # ##
#.# #  #
#.$  # #
#.   $ #
########
`,
    solution: "rDrrddrddLLulLdlUrrrdrruuluullDDuurrddrddllLLrruLL",
  },
  {
    stage: ` 
   #######
####     #
#   .### #
# # #    ##
# # $ $#. #
# #  *  # #
# .#$ $ # #
##    # # ###
 # ###.    @#
 #     ##   #
 ############
`,
    solution:
      "llllldlllluurrruRuUluRRldddldllluluuuurrrurrrrdDllldLdlUUdrrrdrDDulldlllddrrrruRldlllluuuluuuurRdddrDrdLLrrurrddldlllluUddrrrrurRRdrruLLLL",
  },
  {
    stage: ` 
   #######
  ##  # @#
  #   #  #
  #$ $ $ #
  # $##  #
### $ # ##
#.....  #
#########
`,
    solution:
      "dddlUlLullDDDuuurrdrrdddlluLdLLrrrrruuullullddDrdLuuuurrdLDDldRuuurrrruulDrdLLLulDDDuuulDDD",
  },
  {
    stage: ` 
   ######
 ###    #
##. $## ##
#..$ $  @#
#.. $ $ ##
######  #
     ####
`,
    solution: "llLdLLUdrruLLrrrruulllDLdLrdLrrruLLrrrrdLLLL",
  },
  {
    stage: ` 
 #########
 #  ##   #
 #   $   #
 #$ ### $#
 # #...# #
## #...# ##
# $  $  $ #
#     # @ #
###########
`,
    solution:
      "lulullddrUluRdrrdrruLLLUlldldlluRuuUrurRRurrdDDDuuuulldRlllldldddRdrUdrUlURdrrdrruLLLrruuuluurDDDDuululllldlddddrrrUUdrrdrruLLLrruuululllldlddddrrrUllluuuruulDDDDuururrrrdrdddllllldlluRRdrU",
  },
  {
    stage: ` 
  ######
  #    #
###$$$ #
#@ $.. #
# $...##
####  #
   ####
`,
    solution: "dRRRurruullDDLdlluRRRuurrdLulDulDD",
  },
  {
    stage: ` 
 ####  #####
##  #  #   #
# $ ####$  #
#  $.... $ #
##    # @ ##
 ##########
`,
    solution: "lullldlluRRRlluulDldRRdrruRRdrrULLLrrrruulDrdLLLrruulDrdL",
  },
  {
    stage: ` 
  #####
###  @#
#  $. ##
#  .$. #
### *$ #
  #   ##
  #####
`,
    solution: "ldLdlluRRurrddLLddrrUdlluuulldR",
  },
  {
    stage: ` 
  ####
  #..#
 ## .##
 #  $.#
## $  ##
#  #$$ #
#  @   #
########
`,
    solution: "luuRRUUldldddrrUUddrruLdllluurrUrDlllddrrUUruLdddrUUllUU",
  },
  {
    stage: ` 
########
#  #   #
# $..$ #
#@$.* ##
# $..$ #
#  #   #
########
`,
    solution: "dRluuRDrRuLrurrdLLdddrruLUluurrdLdlllluurDldRRllddrUluR",
  },
  {
    stage: ` 
 ######
##    ##
# $ $$ #
#......#
# $$ $ #
### @###
  ####
`,
    solution:
      "uuluurrDLdddlUruuullDRllddRRdrUlULuurDurrdLrrddLLULrddlUruRuulDulldRRurD",
  },
  {
    stage: ` 
  ######
  #    ###
  # $    #
### $ ## #
#... $   #
#...$#$ ##
#### # $ #
   #  @  #
   #######
`,
    solution:
      "lluUluuRlddrUluuurrdLulDDDuurrrrrddllLLLLrrdLLrrddrruUruLLLLuurrDLulDDrdLrddrrrUUluLLulDrruurrrddLLLL",
  },
  {
    stage: ` 
######
#    #
# $$$##
#  #..###
##  ..$ #
 # @    #
 ########
`,
    solution:
      "luuluurrrDDrdLuuullDRurDDrddrruLdlUdlUdlluRRllUluRurrdDuulldRurD",
  },
  {
    stage: ` 
  ########
  #   #. #
 ##  $...#
 #  $ #*.#
## ##$# ##
#   $  $ #
#   #    #
#######@ #
      ####
`,
    solution:
      "ruuLuUruulDlLulldRRRRurDlDDDrddlUlluUUdddrrUUUUlLulldRldRuRRRddddlluRdrUUUddlluUluRlldlddrRRRdrUU",
  },
  {
    stage: ` 
 #######
 #.... #
###...$###
#  $#$ $ #
# $$  #$ #
#    #   #
#### @ ###
   #####
`,
    solution:
      "luurUdlddrrurruuLLrrddlldllullUdrruLUUrurrDLulLdddrrUUruLdddlddrrurruulLrrddlldllullluRdrUUUddlluRdrUdrrUUdrrrddlUruLLrddldlluurU",
  },
  {
    stage: ` 
#######
#..$..#
#..#..#
# $$$ #
#  $  #
# $$$ #
#  #@ #
#######
`,
    solution: "ruulUruulLLdlddrUUlddddrUUURRUddrUUddddlUUUddLUdLdlUUUrRRdrU",
  },
  {
    stage: ` 
   ######
   # ...#
####....#
#  ###$ ###
# $ $  $$ #
#@ $ $    #
#   ###   #
##### #####
`,
    solution:
      "uurDrRdRRuUruLLrdddlluRdrUUUruLdddlllllddrUluRRRRdrUUddRUUULddllllddrUluRRRdrUUUdddrdrruuLLrrdLdlUUUddlUU",
  },
  {
    stage: ` 
########
#      #
# #$$  #
# ...# #
##...$ ##
 # ## $ #
 #$  $  #
 #  #  @#
 ########
`,
    solution: "luUULLullluurrDurDrrDDDrddllUlldlUUUddrrrUruLdrrdLLLLdlUU",
  },
  {
    stage: ` 
  #####
###   ####
#   $ $  #
# $   $ @#
###$$#####
  #  ..#
  #....#
  ######
`,
    solution:
      "lLLuullddRDDldRRluuuluurDDDDldRuuuurRdLulDDDuurrrruLLLulDDDululldRRDDRRlluuurDDldR",
  },
  {
    stage: ` 
######   #####
#    ### #  .#
#  $ $ # #...#
# #  $ ###  .#
#  $$$   $ @.#
###  $  $#  .#
  #  $#$ #...#
  ##     #  .#
   ###########
`,
    solution:
      "lLLDlluRRRRRllllluLLDRRRRRRdrrUUUdlDllllllluuullldddrRRRRRRRRRDrUUdlllllllllddrUluRRRRRRRRlllllllllluurRDullddrRRRRRRRRdrUUrDDDLuulllllllluuurDDldRRRRRRRRllllluuLdlluurDDldRRRRRRRurrDDuLdlUlllllldddrrrUUluRRRRRlllldddrUUluRRRUrDllllllldRRRddllUUluRRRRRRdRUllllddrUluRRRuRDD",
  },
  {
    stage: ` 
     ######
 #####.   #
 #  #..## #
 #  $..   #
 #  # .# ##
### ##$#  #
# $    $$ #
# #$#  #  #
#@  #######
#####
`,
    solution:
      "rrUUrrrUUUUddddlllUUluurDRRdrddllluUluRRldddrrruuUrrddrddlULLuulUlldddrRdrUllluuurrrrrdDrdLLLUUlulldddddlluuRlddrruUUUluRRldddrRdrUU",
  },
  {
    stage: ` 
 #########
 #   ##  ####
 # $        #
 ##$### ##  #
 #  ## * # ##
 # $...... #
## ### . # #
#     $###$#
#   #    $@#
#####$# ####
    #   #
    #####
`,
    solution:
      "LLLddllUUddrruuLUUrurrruuullldDrddllddrrrrUUUllulDrrrUUruLLLulDDDlDRRluuurrrddddddlllluLLLdlluRuuRRRRRuuurrrddddddlllluUddrrrruuuuuullldddLLrddllLdlluRRRRDrUUddrrrruuuuuullllllulldRRRRRdddLddlllluuurUdldddrrrdrrddllUUrrrrruuuuuulLulDDDuulllulldRRRRlllddldddrrRdrUUddrrrruuuuuullulDD",
  },
  {
    stage: ` 
      #########
      #       #
      # # # # #
      #  $ $# #
#######   $   #
#..#  ## $ $# #
#..   ## $ $  #
#..#  ## ######
#..# # $ $ #
#..     $  #
#  ### @ ###
#### #####
`,
    solution:
      "rUUUUUUrUdlluRRlddddddrruLdlUUUUUluuurrrrrrdddllLdLrurrruuulllllldddrDDDDrdLLLLLLruuulllddddrUUUUdddrrrrrruuuurruLrrrruuullllDDDuuullddRDDDDDrdLLLLLLruuulllddddrUUdrrrrrruuuuurrdLulDuluuurrdDuurrdDLddllDDDrdLLLLLLruuulllddrUldddrUUdrrrrrruuuurrdLulDDDrdLLLLLLLdlUUUURRlldddrrrrrrruuurruuLruruurrdddddlLLLulDDDrdLLLLLLruuruulDlllddddrUrrrrrruuurruuuruulldDlDDDDDrdLLLLLLLdlUUUddrrrrrrruuurruuLulDDDDDrdLLLLLLLdlUUdrrrrrrruuurrrrruulLLLrrDurrddlLLLulDDDrdLLLLLLLdlUrrrrrrruuuruuulDDDDDrdLLLLLLLrrrruRdrUUUruulDDDDrdLLLLLLruUruLL",
  },
  {
    stage: ` 
    ####
#####  #
#  $ $ # #######
#   $  # #*.*.*#
## $ $ ###.*.*.#
 #$ $  #  *.*.*#
 #@$ $    .*.*##
 #$ $  #  *.*.*#
## $ $ ###.*.*.#
#   $  # #*.*.*#
#  $ $ # #######
#####  #
    ####
`,
    solution:
      "UrRdRRRRdrUrUrUrRlldldDrDrRuUUUddlUdDlUUdllluRRRRdrUdllllllllluuRDldRRRRRRRRurDDDuulllllllulllldRRRRRRRRRRurDDulllllllluuurDDldRRRRRurDDullllluuuuulDDDDldRRRRRRRRdrUllllllluuuullDDDldRRRRRRRRRlllllluuulllDDldRRRRRRRRRurDldRulllllluuulllluRRRurDDDDldRRRRRRdrUllllllullllUruulldRRRRurDDDldRRRRRurDldRullllldddlUlUluRRRRRRRRlllllddlUluRRRRRRdrUllllldddddlUUUUluRRRRRurDldRullllddddllUUUluRRRRRRRlllldddlllldRRRdrUUUUluRRRRdrUllllllllDDRddlluRRRRdrUUUluRRRurDldRullldddllUUluRRRRRR",
  },
  {
    stage: ` 
########
#......#
#  $ # ##
# $ # $ #
##$ $ $ #
 #  @   #
 ########
`,
    solution:
      "luuUruLLdrdddrruLdrrruLLdllUUUlldRurrurrdDlddlluUluuRRllddrUluRddddrrrUUUdldLdlUUUdddlUUU",
  },
  {
    stage: ` 
  ##########
###   .    #
#   ##$##  #
# @$. . .$##
## $##$## #
 #    .   #
 ##########
`,
    solution:
      "ddrrrrrrruUlllllLuurrrDulllddrrRRllllulldRddrrrrrrruuUruLLLrrddddlllUdlllluuRDldRRR",
  },
  {
    stage: ` 
   ######
####.  @#
#  $$$  #
#.##.##.#
#   $   #
#  $.# ##
####   #
   #####
`,
    solution:
      "dddlddlluLuRddrruuruulullDDDllluurRlldddRurruURurrdddlLLuurRurDlllddrrddllUULLdRllU",
  },
  {
    stage: ` 
 ######
 #. ..#
 #. $.#
###  $##
# $  $ #
# #$## #
#   @  #
########
`,
    solution: "lUUUUluRRDlddddlluuRlddrruUUUruLdddddrrruuLUdLUdrrddllluUUrUL",
  },
  {
    stage: ` 
    ######
  ###    ###
  #   #$   ###
  #   $   $$ #
  # $$ #$    #
  ##   $   $ #
###### #$#####
#..@ #$  #
#.#..  $##
#....$# #
#....   #
#########
`,
    solution:
      "drrrUUUllUluurrdDuuurrrddlLDDDDrDLLLdlUrrruuuulldRurDDDrdLLLuLLrDrrruuuuurrrddlLrruullldDDDrrUdldLLLdLUruLddLdlUrrurrruuuuurrrddLLrruuluulDulldDDrDDDrdLLLulDDrdLLrrrrrUUllDurrddlLLLuurrruuurrddLruulldDrdLLLulDDurrruuurrrurrrdLLLLLrruulLLdDDDrdLLdlluurDDurruuuuurrDrdLLruulldDDDrdLLLulDrdLLrurrruuuuururrrDDrdLLLLruulldDDDrdLLLulDrdLurrruuurrrrrruuLLLulDDrdLLruulldDDDrdLLdlluurDrruuuullluurDldRRluurDrDDDDrdLLLulDrrruuuuulldRurDDDDrdLLLrruuuulldRurDDDrdLL",
  },
  {
    stage: ` 
###############
#      #      #
# $ #$ # $##$ #
# #  $ #      #
#   ##$#$##$$ #
# # # ... #   #
# $  . # .$ # #
# $#@$...# #  #
#    . # .  $ #
# ##.$###$. # #
# # $..... ## #
#             #
###############
`,
    solution:
      "dllldddrruRRRRllluurDluuuluuuuurrrddDDDlDDlddRdrrrrrrrruuuuuuuulllllDurrrrrddddddddllluuulluuruLLrddlLullluuuuurrrdddDDurruuuurDurrrrddlllLulDDurrrrrddddddddllluuulluuruLLruuuurrrrDrdLLLLulDDurrrrrddddddddllluuulluuruLdddrrddlUddlluRdllluRRllluurDldRRlluuuurDDDldRdrrrrrrrruuuLLrruuuuulllllddddlLulDDDulllluuRDldRRluuRRluuuuurrrdddDDulDDRullluuurRlluurrDrDDDDllllluuuuRurDDrRurDDulllDDullddrRRdDllldddrrrrrrrrrrrruuuuuulUruLLLLulDDDDuuurrrrddldLdDuuruUruLLLulDD",
  },
  {
    stage: ` 
#########
#   ##  #
# # $ $ #
#  *.#  #
## #.@.##
##$###*###
#        #
#   ## # #
######   #
     #####
`,
    solution:
      "luLuullddRdDuuluurrdRddrruruulDLLddrrUruLddDDrrddllUUllldlluRuuuRlluurrDullddrdddRRRRddrruuLLUUUruulDLLDurrDDDDrrddllUUUdLLLdlluRRRRRddrruuLrddlluUlllluuuRlluurrD",
  },
  {
    stage: ` 
########
#      #
# $$   ###
#  $ $$$ #####
## ## ...    ##
 # #@#...###$ #
 # # $...     #
## # $...$ # ##
#  ##### ### #
#      $   $ #
###########  #
          ####
`,
    solution:
      "dRldRuRurDuullUluurDrDulldRdRluurDDDrruuLDrrrrrDrdLLLLLdddrrRdrUUUddlllluuuuurrrrdrdLLLLrrruullllllluurDuulllllddrddddddrrrrRRuuUdddRRRdrUUUddlllllllllluuuuuuRRRdRluurDrrdrrrrdrdLLLdLruLrrruullllullDRluuullllDRRRurDDullllldRRRRdRluurD",
  },
  {
    stage: ` 
   #####
   # @ #
   #$$$#
####   #
#   .#$##
# $.$. .#
#  #.#.##
########
`,
    solution:
      "lDDrrDDlLrruulluurrDDDullDDrRllulllddrUluRRldRRUUrrddLLLrrruuuullDDDldRlulldRurrurruLulDD",
  },
  {
    stage: ` 
############
#... #     #
#..  # ##  #
#..     #  #
#..  # $## #
#... #$ $  #
######  $$ #
 ##  $ $$  #
 #@ $$$  # #
 ## $ ##   #
  #        #
  ##########
`,
    solution:
      "rddrrrrruulURlluUrRDLddrdrruuuuuuuullllddrDDlUruLLLLLrrrruurrrrddddddddllululUUUruLLLulDrrrddrrdLdlUUUruLLLLDrdLLulUUrDDurrrruurrrrddddLLLdlUUruLLLLrrrddrrrrdLLLddrUllUUUruLLLdllUUrDrrrddrrrdLLdlUUUruLLLdLLrUrrrddrrrrddLLdddllllluuurRlldddrruUddrrruulUdLUUUUruLLLuLLrDrrrddrrdddddllllluuurRlldddrruUrUUUUruLLLLLrrrrdddddlddlluuurRdrUUUUruLLLdLUUdrrrddrrdLdlUUUruLLLdlUrrrddddlllddRUluRRdrUUUUruLLLuLDrrrddddlldddrUUluRdrUUUUruLLLLD",
  },
  {
    stage: ` 
#########
#       #
#  $ $ $#
## #$## #
 # .. ..##
 ##.. .. #
  # ##$# ##
  #$ $ $  #
  #      @#
  #########
`,
    solution:
      "llluUddrruuulLLullluuurrdRurrDDDldddLdllUUUdddrruLdlUUddrrrrruLdlUUUddrruuLuuuulldRurDDDuuullllldRRDuRRurDD",
  },
  {
    stage: ` 
#####      ####
#@  ########  #
## $       $  #
 # # #  ####  #
 #  $   ####$##
 #$ ## # $ $ #
## $  $#     #
#   #      # #
#   #####$####
#####   #   #
    #...  $ #
    #....#  #
    #....####
    ######
`,
    solution:
      "rdddrRuurrdddDuuuullddRlldDrrruUddllllddrUluRuulDDuurruuLulDDDrrrrddldRRRurrrruUUruulDLLLLLLLLddrrdddrrurrrruuUruLddddlluRdllluRRddLDDrrddlUruLdLLdlluurDrrUUUruulDDDDrdLLLLulDDrRurruuuurrrUUUruulDLLLLLddllllddRRdrrRurDDDrdLLDlluurDDurruuullllulluurrrdDldRRRurDDDrdLLdlluurDrruuulllulllddlluRdrUluRRRlluurrrdDldRRRurDDDrdLLLulDDRurruuullluuullllDDrddlluRdrUluRRRlluurrrdDldRRRurDDDrdLLLLrrruuullluuulluuLulDDDDDrddlluRdrUluRRRlluurrrdDldRRRurDDDrdLLLullDRurDrruuullluuuruuLDDDDuuuuLLLulDDDDDrddlluRdrUluRRRdRRRurDDDrdLLLulDrrruuuurrruuUruLLLLLLLdddDuuuuLLLulDDDDDrddlluRdrUluRRRdRRRurDDDrdLLLLrrruuuuurRdrUUUruLLLLLLLdddDuuuuLLLulDDDDDrddlluRdrUluRRRdRRRurDDDrdLLLrruuullllulluurrrdDldRRRurDDDrdLL",
  },
  {
    stage: ` 
     #####
 #####   #
 # .. $# #
 # #.*   #
## *.#$ ##
# $  $  #
#   ## @#
#########
`,
    solution:
      "uuulDruruullDllllddRddlluRdrUluuurrrrurrddldlUdrddlULLUUddrrruulLuLrdrrddllluUddLdlluRuRlddrUrrrUruLLrrruullDurrddlL",
  },
  {
    stage: ` 
##### #######
#   ###  #  #
# $     $ @ #
## #$##.##  #
 #  ...*. $ #
 # $# #.# # #
 ##    $    #
  #  ########
  ####
`,
    solution:
      "drdddlluulLrrddrruuululLulDllllulldRddrrrddllUluuuRRRRRDDrrddlLLLuuRlddrrrrrruuLLruulLulDlllllddRRRddLdlUUluRRlluurrD",
  },
  {
    stage: ` 
         ###
    ######@##
    #....#$ ##
    #....# $ #
    #.... $  #
    # ...#   #
###### ##### ##
# $ $   $  #  #
#    $$   $ $ #
### $ $ $  ####
  ##   $ $ #
   #  ######
   ####
`,
    solution:
      "DrDDLLLdllddrddLUUUUURdrUUlLdddddddllURdrUUUUUUlURRldddddrrrdLLrdLLUUUUUluRdddddrrrrdLuuurDluLLdlUUUrUUdLrrrrrrdddrdLLLLLLdlUUUUlURdrUrrrdRurDDDrdLLLLddrUluLLdlUUUUluRRRRRdrrdddlLLLLdlUUUddrrrrrruuullullllldRRlddddllluuRRllddrrruUUddrrrrrruuullullllldRddddllURdrUUUUdddrrrrrruuullulllLddddllluRRdrUUUUUddddllddddrUUUluRdrUUUUddddllllluRRRRdrUUUddrrrdddLLLullddrUUUluRdrUUddrrrrrruuuuLLLLrrruulDrdLL",
  },
  {
    stage: ` 
   #####
 ###   ###
##  @$ $ #
#  ## ## ##
# $.#.$   #
# #.#*#   #
# $...  ###
###$# ###
  #   #
  #####
`,
    solution:
      "lldldddRRlluuRuurrurrdLddRRddllddllUUlluuruurRurDllldldddrrddrruuLrrruullDurrddlLrrurruLuuLLulldRDDDurRdrruLuulLulDDDuurrrddLL",
  },
  {
    stage: ` 
      ####
      #  ######
      #    #  #
      # $$    #
#######$#  #  #
#  #. .. ###$##
#  #.#*.$     #
#  #.#.*# #   #
# $$....# #####
# @$ # ## #
# $$$#    #
#    ######
######
`,
    solution:
      "URRRRuUddddrrruuuuLLuLLrDrrrrrrUUruulDDDuullullldDDrdLrrrrdrruLuuulldlULulDDurrrrrdddLLLLuLuurrruLLulDDDurrrrrdddlllddddllluullllldddrrrUUUUddddllUUluRRRRlllddRdrUUUllluurDldRRRddlUluR",
  },
  {
    stage: ` 
####
#  ###
# $  ###
# $ $  ###
# $ $ $  ###
# $ $ $    #
# $ $  #   ##
# $  ## $$$ #
#@ ####     ##
## # #.$$$$$.#
 # ###.......##
 #   .*******.#
 ####.........#
    ###########
`,
    solution:
      "uuuuuuRlddRUldddRUrRllluurrRDrDRRRdDldRDLdRRDullDRdRRRRllllLLruulDlllluuuUluurrRRRRurDDDDDDrDLdRRRlluullDllllluuuuUluRRRRRRurDDDDDuRDDRRDRlulDulLLdllllluuuurUluRRRRRurDDDDDDDRRRllllllllluuuurrUluRRRdLruRurDDDDDuuurruLdDDDDLdRRlllllllluuuurrUrurrurDDDDDlDRdLLrruuuuuulldllluRRRRurDDDDDDuuuuulllluullDldRRRRRRurDDDDDrDDLLuRuuuuulllluulDldRRRRRurDDDDDDuuuuullllllluuuurDDDldRRRRRRurDDDDDrDLuuuuulllluuuLdlluurDDDldRRRRRRurDDDDDlDRuuuuuulLuLDldRRRurDDDDDuuuullllluuurDDldRRRRurDDDDrRDDuRlluuurDDDuurDDllLulD",
  },
  {
    stage: ` 
#######
# @#  #####
# $$  $   #
#  #.##$# #
##$#...   #
## ...##$##
#  ##.##  #
#  $  $   #
#  #   #  #
###########

`,
    solution:
      "lddrDDrrurrrrruullLLulDrrrDurrddlLrDDrddlUlLdlUUUlllDlddrURRRuulllDldRuuuuluurDRRDDuuRRRddrdDrddlUlLdlluRuuLuuurrrddrruuLLLLulDDDuullDDDDlddrURRdrUUdlllUUUUluurDrrrrrddrdDrddlUlLdlUllluuuUluurDrrrrrddrdDrdLLLdllulluuuUluRRldddddrrdrruLLLrrrrruuuluullulDDullddddlddrUUUUUluRRldddddrrrrrruuuluullulD",
  },
  {
    stage: ` 
   #####
   # @ #
   # $ #
   #$.$#
 ###.$.##
## .$.$.###
#  $.$.$  #
#    .    #
###########
`,
    solution: "ldDrDrDDLUddllluurRRRuUlDuluurDurDDDlDlllddrUdrrUrUdRdrruLLdL",
  },
  {
    stage: ` 
#############
#  $ $ $.*..#
# $ $ $ *...#
#  $ $ $.*..#
# $ $ $ *...#
#  $ $ $.*..#
# $ $ $ *...#
#  $ $ $.*..#
# $ $ $ *...#
#  $ $ $.*..#
#@$ $ $ *...#
#############

`,
    solution:
      "uuuuuuuuurDrDrDrRuRuRRRlluRRdllldlddRdRRRlllululluRuRRRRllluRRRdlllldlluRRRRRlllluRRRRdlllllluRRRRRddDRRRllURRlllulldRRRRllulllllldRRRRRRRlllllllddrUluRRRRRRllllldRRRRRRRlDRRlullldRRRlldRRldRRdddlUlURRlllURRuuulllllllldddrUrRdRRRRllldRRRRllldRRRRllldRRRlluuullllulldRRRRRlllldRRRRRlllldRRRRRlllldRRRRlluuulllllldRRRRRRllllldRRRRRRllllldRRRRRlllluuuuURRRRllDRRllDlluRRRlllllURRRRRlllluRRRRRlulllllldRRRRRRdddlDldRRlllllldRRRRRR",
  },
  {
    stage: ` 
             #
            ##
           ###
          #   #
   ######## # #
  # $ $ $ $   #
 ## #.#.#.#@$#
###.......   ##
 ## # # # #$##
  # $ $ $ $   #
   ######## # #
          #   #
           ###
            ##

`,
    solution:
      "drUluuurrddLruulldDrddllluuRRDuuurrddLddLuUllddlluuRRddlllluuRRddrrddRRUULLLLddRRuurrruulDurruullDDrddLLLuuRRDuuurrddLddLuUddddddrruuLrddlluUUUruulllddddlluuuullddlluuRRddddRRuuLLrruuRRddLLrrddRRuuLLuullddddlluuuullddddRRuuLruuRRddLLrrddRRuuLLuullddddRRuuLrddlluUrrrrrrruulDrdLLLLLLrrrrruurruullDDDrdLddddrruuLrddlluUUULLddRRddrruuLrddlluUlluuLLddRRuurrruulDrdLLLuuRlddddlluuuuRRddLrddlluUrrrrruuruulldDDrdLLLuuRlddrrruuruulldDllddLrddRRUdlluuuurrrddLLLrrddddrruuLrddlluUUdlluuuurrrddLLrddlluUrrruulDrdLL",
  },
  {
    stage: ` 
#######
#  .$ ###
# .$.$  #
#*$.$.@ #
# .$.$ ##
#  .$  #
########
`,
    solution: "lLdLdRuuuLDrrruLdlluulldDRRRddlllUdrrUruRuuLrdrrdLdLrdLL",
  },
  {
    stage: ` 
         #####
         #   #
########## * ###
#          .   #
# $$$$****$...@#
#          .   #
########## * ###
         #   #
         #####
`,
    solution:
      "dlllllURRRdllllllllllluurrrrrrrRRlllDullllllddrrrrrRRRRuulllllDullllddrrrRRRRRurrrdddlluUluRRlulllllllDullddrRRRRRRRuruuurrddrrddllddlluUluRullldRullldRRulllldRRRullllldRRRR",
  },
  {
    stage: ` 
     ####
######  #####
#@$    $  $ #
#$### $ # # #
#  #  # $   #
# $#    # ###
#  $ #$#   #
#......... #
########   #
       #####
`,
    solution:
      "DDrDDldRRRRRRRurrdLuuuuulLdLruulDrdddlDullddlluuuluuRRRRDDlddLdlUdrrrRuuLulDDurrddlLLruurrruRluLruulDlDDuurrrrdDDDuurruuLLLLdddlLulDDldRRluurrruuLruulDlDDuurrdddlLulDDldRuurrruuLulDDurrddlLulDDllldRurruruuullllddDDuurDD",
  },
  {
    stage: ` 
 #########
 #   ##  ####
 # $        #
 ##$### ##  #
 #  ##.$ # ##
 # $...... #
## ###.  # #
#     $###$#
#   #    $@#
#####$# ####
    #   #
    #####

`,
    solution:
      "LLLddllUUddrruuLUUrurrruuullldDrddllURRlldddrrrrUUUUUruLLLulDDDrddlluRlddLLLdlluRuuRRllddRRRDrrddllUUrUUruuuulllulldRRRRlllDDldRlddrrRdrUdrrrruuuuuullulDDD",
  },
  {
    stage: ` 
###########
#    #    #
# $@$$$$$ #
#         #
##### #####
   #.  #
   #.  #
   #...#
   #.  #
   #####
`,
    solution:
      "drrrrrruulllDurrrddllLLLLuullddRRRluurDullDrrRDDDlddrUruLuuulldRurDDurrrruulDullDlddDrddlluRuuuururrdLdLruulDlDDDDlddrruLuuuuurrdLulDDDDDrdLuuurDluuuurrrrdLLLulDDDDuuuulllldRRRurDDDrdL",
  },
  {
    stage: ` 
  #####
  # @ #
  # $ #
### . ###
#   *   #
# ***** #
#   *   #
###$*$###
  # . #
  # * #
  # . #
  #####
`,
    solution:
      "ldddllddrrUUUrruullDurrdddLrrrddllDDllddrrUdlluurDulUURldddrrUlluurDDuuUUrrrddlLrruullldDlddrrUdlluurDuuurrrddlLrruullldDllluurRllddrrrrrruulluuulldDuurrddLDrrrddlllllluurRDullddrRuuUrruullDDDuuurD",
  },
  {
    stage: ` 
##############
#.           #
#.$ $ $ $ $  #
#.#########  #
#.#.* $ ..$*##
#.# $ $ *.$@#
#.#.  $ ..$$#
#.#########.#
#.          #
#.#$#$#$#$#$#
#.          #
#############
`,
    solution:
      "UUruullllllllllldddddddrrrrrrrrrruULLuullddLLuuLrddrruurrddLruulldLdlLURuRRdRdLLrrrrrddlllllllllluuuuuuurrrrrrrrrrrddldLDururuullllllllllldddddddrrrrrrrrrruuLrddllllllllllddrrrrrrUdlllllluuuuuuuuurrrrrrrrrrrddldlddrddlllLLLLLLrrrDurrrrrruuluururuulllllllllllddddddDuuuuuuurrdLulDDDDDuuuuurrrrdLLLulDDDDuuuurrrrrrdLLLLLulDDDuuurrrrrrrrdLLLLLLLulDDuurrrrrrrrrrrddlULLLLLLLLLulDrrrrrrrrrrddlddrUUUruLLLLLLLLLLrrrrrrrrrddddddllllddrrUdrrUUUUUUddddddlllllLLLLrUdrruulLLrrrrrrRRlddrruUUUluurDDuuUruuLLLLLLLLLLrrrrrrrrrDDDlddrUldLLululldRRldRRlullldRRR",
  },
  {
    stage: ` 
############
#..  #     ###
#..  # $  $  #
#..  #$####  #
#..    @ ##  #
#..  # #  $ ##
###### ##$ $ #
  # $  $ $ $ #
  #    #     #
  ############
`,
    solution:
      "rdrRdddrruuLUUruulLulllldDuurrrrdrrddldlllulLLLLLdlUUUddrrrrruuurrdLulDDuurrrrdrrddldlllulLLLLLdlUUdrrrrruuurrrrdLLLulDDurrrrrrddldlllulLLLLLrrrrrrdrrruUruLLLLLulDDurrrrrdddlllulLLLLrrrddddllluRRdrUUUUrrdrrruuulllllDurrrrrdddlllulLLLdlUrrrrrdrrrdrddlllluLLdlluRdrUUUddrrdrruLLLLdlluRdrUrrdrrrruululllulLLLuLLrDrrrrrdrrrdrdLLLLLLUUdddlluRdrUrrrrruulllulLLLdLLUUddrUrrrrrdrrDrdLLLLLUUdddlluRdrUrrrruullulLLLLrrrrrdrDrdLLLLUUddrrruululLLLuLDrrrddddlluRdrUUUddrrruululLLLdLUUUruL",
  },
  {
    stage: ` 
       ####
########  ####
#   ##.....  #
#  $  ##...# #
##  $  ### # #
 # # $  #    #
 #  # $  #   #
 #   # $  #  #
 #    # $ # ##
 ####  # $  #
    ##  # $ #
     ##@#   #
      #######
`,
    solution:
      "ululullluuuurRdRdRdRdRdRdRdrUUUUUruLdlUUUddrruuulLdlluurDrdddrdddddlluRdrUUUUruLdlUUUddrruuulLLulDrrdddrddddlllululululuurDrDrDrDrDululululllluurDldRRdRdRdRdRdRRdrUUUUruLdlUUUddrruuulLLLLrrrdddrddddlllululululuurDrDrDrDrDululululldRdRdRdRdRRdrUUUUruLdlUUUddrruuulLLLrrdddrddddlllulululuurDrDrDrDulululldRdRdRdRRdrUUUUruLdlUUUddrruuulLLrdddrddddlllululuurDrDrDululldRdRdRRdrUUUUruLdlUUUddrruuulLdddrddddllluluurDrDulldRdRRdrUUUUruLdlUUUddrddddllluurDldRRdrUUUUruLdlUU",
  },
  {
    stage: ` 
####      ####
#..########..#
#*.*.....*.*.#
# $ $ $ $ $ $#
#$ $ $@$ $ $ #
# $ $ $ $ $ $#
#$ $ $ $ $ $ #
#.*.*.....*.*#
#..########..#
####      ####
`,
    solution:
      "UdDlUlDlDlDuruUlUlUdrdDlDDuurDurrrDLLLulDuUUrUddrrULdlUdrrrUddrDurDuUUdrUdDDurDuUrDrDDuulldRurDrDuluUrUUddllURUddllluRRdrUdrUdDD",
  },
  {
    stage: ` 
    #####
   ##   ####
   # ..* $ #
#### #.#   #
#    .*.#@##
# #$##$## #
#     $ $ #
##  #   ###
 ########
`,
    solution:
      "uluLulldlddrRlllllddrrrrdrruLUUlllllddrrrRdrUllllluurrruururrdLrrdrruLLrddddLLdllulllluurrrrrUdlllllddrrrrdrruLUUlllllddrrUdlluurRRlddrRdrUU",
  },
  {
    stage: ` 
######
#    #
# $  ####
# $*..* #
# *..*$ #
####  $ #
   # @  #
   ######
`,
    solution: "uUluulDuulldRldRuRurDDDrddlUUddrrruuLrdLLdlU",
  },
  {
    stage: ` 
   #####
####.  ##
# $.$.  #
#@$# #$ #
# $. .  #
####$#$ #
  #. .  #
  #######
`,
    solution:
      "dRRRDuuUrrrddddllLuullluuRDldRuuRRddddrrruuuulLLrrrddlUruLddDrdL",
  },
  {
    stage: ` 
############
#    ... $ #
# $$$*** $@#
#    ... $ #
############
`,
    solution:
      "uLLLrddllllUdllluurrRddrrrUrurrdLLrrdLLLLLLuulllddrRRRRlluullDldRRRRluulDldRR",
  },
  {
    stage: ` 
##########
##       #
#   #$#$ #
# $$  .$.#
# @###...#
##########
`,
    solution:
      "UluRurrrrrrdddllullLrrrdrruLruulDDrdLuuullllldlddrUrrrRRurDluulllllDldRRRRRRuullDulllddrrRRluullDldRRRuurrdD",
  },
  {
    stage: ` 
 ####
 #  #####
##$ ##  #
#  $@$  #
#   ##$ #
###.## ###
 #...$ $ #
 ##..    #
  ########
`,
    solution:
      "LddddrrruLLdrrrruLLuUruulDDDDrdLLLuLuuurRlldddrdrruuuruulDDDDuuullldlluRRuulDDrdddrdrRuuuulLrrddddlluluuUluurDDDDuulldRurDurrrdddLrrrdLLL",
  },
  {
    stage: ` 
##### ####
#...# #  ####
#...###  $  #
#....## $  $###
##....##   $  #
###... ## $ $ #
# ##    #  $  #
#  ## # ### ####
# $ # #$  $    #
#  $ @ $    $  #
#   # $ $$ $ ###
#  ######  ###
# ##    ####
###
`,
    solution:
      "rRRllluuurrdDrdLurrRdLrddlUruulllddRRULuluullddddRRULdlUUUUruLdlUruLdlUruLdlUruLddrrrdddddlLdlluRRRRdrruLdlUUUUruLdlUruLdlUruLdlUUruLdddrrrdddddlllluurDldRRRRdrruLdlUUUUruLdlUruLdlUruLLrrdddrrrdDrdLLdlUUUUruLdlUruLdlUruLdlUUddrrrdddddrrrrruLLdllluuurrdDrdLLdlUUUUruLdlUruLdlUUUddrrdddddrrrrrrRurrdLLLLLLLLdlUUUUruLdlUruLdlUruLdlUdrrrdddddrrrrrrruLLLLdllluuurrdDrdLLdlUUUUruLdlUruLdlUruLrdddrrrddrrdddrUluurrrddLLruLLLLLdlUUUUruLdlUruLdlUUrdddrrrddrrrdddlUruLLLLdlUUUUruLdlUruLLrrddddddrrRurrddlUruLLLLdlUUUUruLdlUruLdlUrddrrrddrrrruUlluurRDDDDrdLLLLLLdlUUUUruLdlUruLddrrrddrrrruuuulDldRurDDDrdLLLLLLdlUUUUruLdlUUddrrrddrrrruurruLdlluurDDDDrdLLLLLLdlUUUUruLLdrrrddrrrruuluuuurDDDDDDrdLLLLLLdlUUUUruLdlUdrrrddrrrruurruuLdlluurDDDDDrdLLLLLLdlUUUUruLdrrddrrrruuuulllUluurDldRRRurDDDDDDrdLLLLLLdlUUUUUdrrddrrrruuuuuulLdlluurDldRRRurDDDDDDrdLLLLLLdlUUUU",
  },
  {
    stage: ` 
#######
#. . .#
# $$$ #
#.$@$.#
# $$$ #
#. . .#
#######
`,
    solution: "UdRlLDldRRRUrUULuLLDDDurUdRddlLuurD",
  },
  {
    stage: ` 
      ####
#######  #
#     $  #
#   $##@$#
##$#...# #
 # $...  #
 # #. .# ##
 #   # #$ #
 #$  $    #
 #  #######
 ####
`,
    solution:
      "urDluLLLDlluRRdDrddldlluuUdddrddlUUrruruulDrrdddLLullUURRRdrUdddlluUdllddrUluRluurRuuullldRRurDDrDrrrdDrdLLLLLUlluuUdrRRlllddrrUdllddrUluRluurRdRUluuuRRRdrDDDDrdLLLLLUUdllddrUluRluurRuuullldRRurDurrrurDDDDDDrdLLLLLUUdllddrUluRdrU",
  },
  {
    stage: ` 
   #########
   #   #   #
   #       #
#####*### ##
#   ...   #
# # #*###$##
# $    $   #
#####@ #   #
    ########
`,
    solution:
      "ulluurrUdllddrrUUddrRRdrruLLLLdlUlluurrrrrrDullllllddrrUdlluullddRRuurRddrrrdrruLLLLdlUrrrruullLLLLddRRUdlluurRddRRRdrruLuuuulllulldRDDllddlluuRRddrrUdrrRdrruLLLLdlUrrrruuuullLulD",
  },
  {
    stage: ` 
#####
#...# #####
#...###   #
#....   $$#####
#....  #  #   ##
#..#$#### #$#  #
## $  #     $$ #
#  $# @ $ $$#  #
# $ $ $ #   $ ##
#   #  $ ##   #
######   ######
     #####
`,
    solution:
      "lulLDlUUUUUdddddlddrrUdlUUUUUUdddrrrddLLdlUUUUUluRdddrrrdrrurrdLLLrdLLLLdlUUUUluRddrrrDrrrrdrrdrruuruulDLLLLddrrULLLLLdLLLdlUUUrrrDulllUURUUdLrrrrrurrDDDDrdrddrruLdlUrrUruulDlLLdLLLLdLLLdlUUUrrrDulllUUlUUdRdrRurrrurrdddDrddrrrUruLLLLdLLLLdLLLdlUUUrrrDulllUUrULrrrrrurrdddDrddrUdrruulLLdLLLLdLLLdlUUUrrrDulllUUrurrrrurrdddDrdLLLLdLLLdlUUUUluURRdLulDrddrrrDrdLrddrruLdlUluLLdlUUUUUruLdddddrUdrruulLdlUUdrrrdrrrruuuuulldllLdlLddrrrdrruRlddLLLLdlUUUUUrrurrrurrdddDrrrruullDurrddlLLdLLLLdllluurrDullluurrurrdLLurrrurrdLLLLrrrrddDrdLLLLdLLLdlUUUUdrrUdrDrdLLLdlUUU",
  },
  {
    stage: ` 
###############
###.#      ####
##..# $  $ #  #
#...# ## $ #  #
#.....  #$$   #
##....$    #$ #
#### #######  #
#   $        ##
#  $ #  $# $ ##
# $### $ # $$ #
#   @#  ##    #
###############
`,
    solution:
      "llUluurrRuuurrrdrrrUrrrddlUUdddlllllldddrUrUdlluurRRRdddrrUUUUruullldlllullldddRRlllllddrUluRRRdLullddrUluRRdrUUUruLLdlUUdrrrrrdrrrurrrddlddddlluuullddlluuLLdlluRdrUUUruLLdlUrrdddrrddrruuLLLLdlluRdrUUUruLdlUUUdLdrrdddrrddrUruLLLLdlluRdrUUUruLLdlUrrrrrdLLrrrrrurrrddldLLLLLLLLuUruuuurrrrrdDuullddRDuluullldddLdddrrrrrrrruruullLdLLLLLLLUUdrddddlluRdrUUUruLdlUrruuurrdLulDDurrrdrDrrrrddlUruLLLdLLLLLruLLLLrrruurrrdrDrdLurrrdddddLUruLLLLLLLLuUruLLrddddlluRdrUUUruLruuurrrrrdDlddLLLLLddrrrrrrrdddlUUruLLLLLLLdlluRdrUUUddrrrrrrrruuulLuuLLLLulDDurrrdrDrdLLLLLrrrrurrrruulDrdLLLulDrdLLLL",
  },
  {
    stage: ` 
       ########
       #  #   #
 ####### $$...#
 #        #...#
 # ######$#...#
## #      #...#
#  # #$ $ #####
# # $ $ $ #
# @  $ #  #
#####$ $$ #
    #     #
    #######
`,
    solution:
      "rrRuRUrurrdLrddlUrdddlUdlluRdrruuuuullLddDuuurrrddlLrruullldDldlllluuruuurrrrrrrDDuuluurDRRRlllldlllllldddlddrrrruruurrruUluRRRurrDDDuuLulDDDuulldddlllddrrrUUUUluRRRRllldddddllURdrUUUUluRRRurrDDuLulDDullddddllluRRdrUUUluRRRRllldddddlllldlluRuuRRRRdrUUUluRRRurrDLulDllddddddddlluRUddrUUUUUUUluRRRRllldddllddRdrUUUUUluRRRurDDDuullldddlllllddRRRRdrUUUUUluRRRurDDulllddddddddllllUUdRRRdrUUUUUUUluRRRurDllldddlllllddRRRRdrUUUUUluRRRlldddddddlllUluRRRdrUUUUUluRR",
  },
  {
    stage: ` 
       #####
  ######   #
###    . $ #
# $  #$.#$##
#  #  @.#  #
## ####.   #
 # $  #*####
 # ## #.  #
 #     .# #
 ###$     #
   #  #####
   ####
`,
    solution:
      "rdDDDllllluuuuluRRldddddrrrddlUrurruuuuuulllldldddddrRRllluuuuururrrrrurrdLDDrdLLruuuLLddDDDrrddlLLLullluuuuururrRRRurDDDrdLLruuulllllldldddddrrrdrrrruulluUUlllUluRRRRRurDDDrdLLruuulllDullddrRllulldddddrrrdrrUUddlluRdrUlluulLrrddllluUrrrddddlUruuulllddrRRRluulllUUluRRurrrddllUluRRR",
  },
  {
    stage: ` 
    ####
#####  #####
#    $   $ #
#  $#$##   #
### #.*. ###
  # ... @#
  ## #$###
   #   #
   #####
`,
    solution:
      "llluRldlddrrUUrruuullLDDuurrrdrruLLLLulDLLDlluRRRRRRRdddllddlluulUUddrddrruurruuullllLdddrRRllluuurrDDuulldddrddrruuLuuurrrdrruLLLLulDlldlluRRRRDDuuRRRdddLruurruLLLLulDD",
  },
  {
    stage: ` 
   ########
####    . #
#  $ $ $. #
#  .####.##
# $.$ $ @#
#  .  ####
#######
`,
    solution:
      "uuulllldLdddrruLdllluurrururrrrdddlLLrrruuulldRlulldldllddrrrrurrruUruLLdrddllldlllluurrurRRRurDllllldllddrrUdrruLdllluuuRdDldRuuuRRRRRlluRR",
  },
  {
    stage: ` 
  #####
  #   #
###$.$#####
#   . $   #
# ##$## @ #
#   . #####
### . #
  #   #
  #####
`,
    solution:
      "luLLLuurDldDDllluurRllddrrrrdLuuURuullDurDDDDllluurRllddrrrrddllUdrruuluUrRRdrruLLLLuullddllddrR",
  },
  {
    stage: ` 
 #####
 # @ ######
 # #..*   #
 # ...#   #
##$## $ $ #
#   #$#####
#   $   #
##### # #
    #   #
    #####
`,
    solution:
      "rdrRRdrruLLLLdlllDDrdRRUUUllluurrDRRRddLruulldLuullddddrdrruUUdrruulLddddlluluuuurrDrrrdrrdLLLruulllullddddrdrruUUdrruulLddddddrruuLrddlluUUUUdddllulldRRRRddrruuLrddlluUUUrrrruuLL",
  },
  {
    stage: ` 
     ######
   ###    ##
   #   ##  #
 ###$##  # #
##     ..# #
#  $#$#*.# #
# $$@ #.*# ###
#  $$ #..#   #
##    #..$   #
 ###$##. # ###
   #  ###  #
   ##     ##
    #######
`,
    solution:
      "rUdddllluluururrRllldlddrUddrrruulLUdrrddlUruuuRRDrDDlddrURRurrdLLLLrrddldllllulUUruuuurrdrdDlDRRRlluuulDuuurDDDDuuulllddddllluluuRuRRRRlddddlddrdrrrruruulLuuuuulDDullllldlddrUrUdlluRuRRRRlddddlddrdrrrruruulluuuuulDrddddrruuuuuulullldllDurrurrrdrdddddrrdLLLrddldlllluluulluuuurRRRRurDDDuullllllddrUluRRRRRurDDulllddddllUUUluRRRRRurDllllldddRdrUUUddlluuurRRRllllddRdrUUdlluurRR",
  },
  {
    stage: ` 
     #######
     #  #  #
     #  $$ #
###### $#  #
#...### #  ##
#.  #  $ #  #
#.    $ $ $ #
#.  #  $ #  #
#...### #  ##
###### $   #
     #@ #  #
     #######

`,
    solution:
      "uRRRururuuluuuulDrdddDlLdLddrrurUruLddldlluuruuLDLLLLdlUrrrrruuUluurDDDDrdLLLLLLrrrrruuuuRRurDDDDrddlULLLLLLLdllUURDrrrrruuuurrrddlUruLLrddrDrdLLLLLLLLLrrrrruuuluurDDDDrdLLLLLUllDDRUUdrrrrrrrrddldlluUruLLLLLulDrrrrrdddrrdrUUUruLLLLLLLLDLUrrrdRurrrrdddllluUruLLLLLLrrruRdrrrruuuulllddDrdLLLLLuLDD",
  },
  {
    stage: ` 
          ######
          #    #
#####   ### ## #
#.. ##### $  # #
#..     $   $# #
#..  ## ##   # #
#.. ## $ #$ $# #
#.. #     $  # #
#.. #  $ ###$  #
#.. # $ $  $ ###
### ## # $    #
  #    #@## $ #
  #########  ##
          ####
`,
    solution:
      "uUULullddRddllluuuuuuurrrrRRRdrddLUUddrrDrruuuuuuulllddDLLLLLLLLLulDDDDDrrdddrrruuUrrdLuuUUdrDRRuuullLLLLLulDDDDDrdddrrruUluRdrUUUUddrrruuullLLLLLLulDDDDrrddddrrruurrUluuuurrrdddlLdlUUUddrrruuullLLLLLulDDDDrddddrrruuluuRdrUUUddrrruuullLLLLLLulDDDuurrrrrrrrrruuurrrdddddddlluLLLLddrrdrrULLLLLuUUUddrrruuullLLLLLulDDDrdddddrrruUrrdRurrdrrdLdlUUruLLLdlUUluuuurrrdddlLdlUUUddrrruuullLLLLLulDDurrrrrdddrrrrrDDlddrruLdlUruLLLdlUUddrRurrddlUruuulllLdlUUUddrrruuullLLLLLLrrrrrrrrddrUrDDDDLLLdlUUdrrrddrruLdlUruurruuuuuuulllddrDLLLLLLLLLullDDrUrrrrrrrrdddlLdlUUUddrrruuullLLLLLuLDrrrrrrruRdrrDDDDDLLLdlUUdrrrrurruuuuuuullldDrdLLLLLLLLdlLuurDrrrrrrrdddlLdlUUUddrrruuullLLLLLDlUrrrrrdddddrrrrddrruLdlUruLLLdlUUdrrrruulllLdlUUUddrrruuullLLLLLLrrrrrdddlldRdddllluuuuUdddddrrruurUUUUddrrruuullLLLLLrdL",
  },
  {
    stage: ` 
       #
     #####
   ### @ ###
   #  $ $  #
   # *.*.* #
  ## .$ $. ##
 ### *.*.* ###
####  $ $  ####
   ######  #
    ##   ##
`,
    solution:
      "rDrrddlDlLuUddrruLdrrddlUUlldRurrddlUruuuullDlDLruruullDllddddrRRRuUddlllluuuurrurDrrrdddLrddlU",
  },
  {
    stage: ` 
 ##############
 # @ * * * #  ##
 #$#  * *  #   #
 # # * * *     #
 # #  * *  ## ##
 # # * * * ## #
 # #  * *  ## #
 # # * * * ## #
 # #  * *  ## #
 # # * . * ## ##
## ##########  #
#              #
#   #########  #
#####       ####
`,
    solution:
      "lDDDDDDDDDuuuuuuuuurrdddddddrRdrrUrruuuuurrrddddddddlllllllllldlluRRRRRRRRRRRlllllllllluuuuuuuuuurrdddddddrrdrruLrrruuuuurrrdddddddrddlUUUUUUUUdddddddllllllllllluuuuuuuuuurrdddrDrRdDDulUruLrdddrrruulLrrddllluluurDrDurruulDrdLuLrruuulDDurrrurrdLLLLrrrddddddddllllllllllluuuuuuuuuurrdddddR",
  },
  {
    stage: ` 
 #############
 #    #  ##  #
 #$$$ # $$  $##
 # $  #  .... #
 #  $  #$.##. #
 #  # $# ....##
##$ $  #$.##. #
# $  $ @$.... #
#   ###  ######
##### ####
`,
    solution:
      "RRRRlluuuurruurDDDDuullllluurDldRRRRurDDulllluRRRurDDlllddlUruulldRRRRllddddlUUUruulldRRRlddddllluluuuuulllDDRddddrRRRdrUUUUruulldRRddddlllluuurDDldRRdrUUUUruulldRurDDldRRlddlllllldlluRRRRRRRRRllllllluulDrddlluRRRRRRRRlllllluuuulDDDrddlluRRRRRRdrUUUUruulldRurDDDlddllllluRRurDldRRdrUUUUruulldRurDDldRlddllllluuuuRlluurrrdDDDDldRRRdrUUUUruulldRurDDldddllllluuuRurDDDldRRRdrUUUUruulldRurDlddddllluuuuuullDDDDDldRRRRRdrUUUUUluurDldRddddllllluuuuuRurDDDDDldRRRR",
  },
  {
    stage: ` 
     #########
     #       #
     #  $#$# #
 ######  # $ #
 #   # $  $  #
## $     ### #
#   #$####   #
#    $ ### ###
#####.. @# ##
   #...$ $$ #
   #...#    #
   #...######
   #####
`,
    solution:
      "dLuluLLLuluurrdrDDDDurDDLurrrdrrULLLululllulldRRRlluuurDrrdDDDlDurDrUluuuullDldRRluurrdDDRddlluRdrUluuuurrruulDrdLLLLulDDldRRluurrdDDDrdLuuuuurruuuurrrrrdddddlldDuurruulLLLulDrdLLLLulDDldRRluurrdDDDuuuurruuuurrrDDuurrddLdLLLulDrdLLLLulDDldRRluurrdDDurDDLuuuurruuuurrrdDrdLLLulDrdLLLLulDDldRRluurrdDDuuurruuuurDDuurrdddlLulDrdLLLLulDDldRRluurrdDrddrrdrrruLLLLruL",
  },
  {
    stage: ` 
####     ####
#  #######..###
# $ $ $  #....#
# $   $$ #***.#
# $ $ $  #..*.#
#  $ $ $ #*.*.#
## $ $ $ .*.*.##
#  $ $ $ .*.*.@#
#  $ $ $ #*.*.##
# $ $ $  #..*.#
# $   $$ #***.#
# $ $ $  #....#
#  #######..###
####     ####
`,
    solution:
      "lddddllUUlDDuurUUULLdRDDDuuuurDDDDDrruuuuuLrdddddlluuuuRurDDDDuuulldRuruuuLDDruuuulDDuullDRurrddlUruLLdlUrrrddddlUUUruLLrrdddddDDulUUUUUruLdddddllllddlLuuRRRRuRDDDDuRuuUUUruLLUrdddddllllddlUluRRRRlllluuRDRRRRDDDrDuuuUUUUruLddddlllllldRRRlluuurDldRRRDDDuullddddlUUUluRRRRuRDDurUUUddlllluuuulDLDlLdddRRRRRllllluRRRRRRDDulllllldDRUluRRRRRRRluRRDDDuurUUUULdddlllluuulDllDldRRRRlllddddRUUluRRRRluRRDllllllLDlluRRRRRRRRRuRDlllddddlUUUluRRRRRRUUUUdddrDlllllllllllldddRUUluRRRRRRRRRRllluuullDldRRRRRRRDDurUUUdddlllllllllllldddddrUUURRllUluRRRRRRRRRRllllllllluRRRRRRRRRRDrUUdllllluulDldRRRRRRdrUllllllllllluRRuulDDldRRRRRRRRRdrUUUddlllluulllDldRRRRRRRlllddddlllUUluRRRRRRRRUUdllllullllllluuRDldRRRllluuuurDDldRRRRDldRRRRRRRRlllluuullDDldRRRRRRdrUlllllllluuuRuLLDlluurDldRRDDldRRRRRRRRRllluuuulLDDDldRRRRRlluuuullLLDuLdlluurDldRRRDDldRRRRRRluuuulllDDDldRRRRllldddddLUUUluRRRRRRRRllllllddddlLUUUluRRRRRRRRllllllllldddddrUUUUluRRRRRRRRlddddlLLLLullddrUUUUluRRRRRRR",
  },
  {
    stage: ` 
      #####
#######   #
#   ##.   #
#  $#..  ###
##  ...#$$ #####
 # $.#.$       #
 # $###$## # $ #
 #   #     $$# #
 ##$$# ##$#$   #
 #... $@ $   ###
 #...#$#   ###
 #...  #####
 #######
`,
    solution:
      "LLLrruurrrruullUUlldlllldRlddrrDDLddrrrUdllluurDuuulUluurrrurruurrdLLrdddrrrrrrdddlldlldllulLLruurrrruurrdDuulluLdlUUllddRDulullllddrUddrdDrrddlLLuuUdrrrrrdrruLLLLLLulDDuuUUluuRRRurruurrdLulDrdLLrrdrrdddRDuluurrrrdddlLdLLLLLLLLulDrrruuRRRRuurrdDuullddRDuluurrrrdddlLdLLLLLLLLDLUrrruurrrrrDrdLLLLLLLruuruulUlllluurDldRRRlllddrUluRRldddrdDlUUUUluRdddddrrruurrrDuruulLLrrrrrdDuurrdLrddlLdllLLLLLLulDrrruurrrrrDrdLLLLLLLLrruuruurrrrrDDurrddlLulDrdLLLLLLL",
  },
  {
    stage: ` 
 ####  ######
 #  ####    #
##*   * **  #
# $ *    *# #
# .   ###   #
######   #@##
# * . *  ** #
#   #   #   #
##*   * #$# #
 #  #####   #
 ####   #####
`,
    solution:
      "uruuulllDldlldlllluRdrrruullDurrddlLrUrrrurRurrdddllULLLLuRRllddlluuRRdrrrrdrruuullDurrdLrddldDLLullDurrdLddLLuuRurDrrrrdddllUUddrruuulLLulldRRlllddrrULulllddRRUruLrurrdLrRdddrruuLrddlluU",
  },
  {
    stage: ` 
 #########
 #   #   #
 # $$$$$ #
## $ $ $ #
# $  @   #
# $ #### ##
#  #..... #
##  ..... #
 ##########
`,
    solution:
      "rrruuullDDRdrdddlllllluluuRuuurrDDRRuurrdDDDuuuullddRllluulldddlddrdrrrrrrruLLLLrrruululuurrdDDDuulllluulldddlddrdrrrrrrruLLLdlllluluuruRRRdRRurDDulllullldlddrdrrrrrrruLLdllllluUrURRRRurDDullllldlddrrrrrrruLdlllllluluuRRRRRRurDDDrdLLLLrrruuullluRuRurDDDDDrdLLLrruuulluRurDDDDrdLLruuulllluuRRRurDDDDDrdLuuulllllluRRRRRurDDDDuulllllluuRRRRRurDDDD",
  },
  {
    stage: ` 
   #######
   #     #
   # $ $ ##
   #####..#####
######..*.  $ #
#  $@$....#$$ #
#   $ #$###   #
#####       ###
    ###  ####
      #  #
      ####
`,
    solution:
      "RddrrUUrruulDrdLuLDruuuulldRurDDrdLuuulllldRRRurDDrddlUdlDDrrrrurruuLLLLrrrrddlUruLLLrrddldlllluurrUrrrddlUruLLrdddlllllluuRRRllllLdRllluRRRRRRddrddlUUUdllUluR",
  },
  {
    stage: ` 
#####
#   ######
# $ .. $ #
##$ ..$$@#
 #  .. $ #
 #########
`,
    solution:
      "dLLrruuLDLLulldRluulldRurDrddllURuulldRurDrrRddLrurrdLLrruuLLLLLulldRRRllddrUluR",
  },
  {
    stage: ` 
  #####
  #   ######
###$#.     #
# $ ...# $ #
#@ $.#*$   #
####    ####
   ######
`,
    solution:
      "uRRRddrrUUddlluulldRurRuullDDrruRRRddrruuLLLLrrddLdlllULulldRRuuurrDrrrddrUruLLLL",
  },
  {
    stage: ` 
    #####
#####   #
#   $ @ #
#  $ #.#####
##$ ##.##  ####
 #  ..... $#  #
 # $##.##  #$ #
 #   #.##     #
 ### $ ##### ##
   # #$     $ #
   #    ###   #
   ###### #####
`,
    solution:
      "lLLDlluRRRRurrdLdddllllddrrdddrrUUUUUddddrrrrrdrruLLLLLLrrrrruuruulDDDullluuurDDldRRluullllllllddrrdddrrUUUUddddlluuulluurrrRRRllddddrrrrrdrruLLLLLLrrrrruUruulDDDulluuulDlllllllddrrdddrrUUUUddddlluuulluurrrRllllUUrurRurrdLdDDllllddrrdddrruuuUdddrrrrrdrruLuulllUruLddrrrddLLLLLdlUUUdddlluuRlddrruUllulUluRRlluururRurDDulldlDldRuulluRRRRurD",
  },
  {
    stage: ` 
#######
#  *  #
# @.$ #
# $.  #
#*.***#
#  *  #
# $*$ #
#  .  #
#######
`,
    solution: "uRddrruLLulldRldRddlddrUUddrrruulDrdLuuUUruuLDD",
  },
  {
    stage: ` 
  #########
  #    #  #
### #$  $ ####
#  $  ##..#  ###
# #  $ #..$ $  #
# $$  $#..  #  #
##  #  ...#$   #
 #$ @ #...# $  #
 #    #...$   ##
 # ##$ ###   ##
 #   $     ###
 #  ########
 ####
`,
    solution:
      "ruuluurDrDulllDrRdRRRurrrDrrddllLLuUluRuuuulDllulDDDrDulldRdRRdrUruulUruLrddddlUUUdddllluurDluuuulldDllddRRRRdRRdrUUdllluurDldRRdrruulDrdLrdLrrrrruulDrdLLLddllllLUUUUruulldRurDldRRllddddrrrrruuLuuulDllldllUluRRRurDldRRRuruulDruuulDrdddDlllluuuurRRurDlllldllDullddrRRRurDldRRRlllddlllUUruuullddRRRRurDldRRllddddLLdlUUUUUruuullddRRRRurDldRlddddrrrrrurruuuluLruLLrrddrruuLLLrddDrdLL",
  },
  {
    stage: ` 
   ##########
####......  #
#   .....#  #
#  #...... ##
## ####$##$#
#@$  $ $   ###
# $$    ##   #
# #  $$##  # #
#   $  # $$  #
#  $  $   #$ #
####   # $ $ #
   #   #     #
   ###########
`,
    solution:
      "dddrruUddlluuRUUUluRRldddldddrrururruRUUUdlllUrrrddddllluRRdrUUdlllddldlluuruuuurrrrrrdLLLullldddlddddrRRUrUUluRRdrUUdlldddlllluuruuuurrrrrrdLLrddlldddrUUluRdrUUdldddllddrUUddrUUUUdddrrddrruLdlUruLLrddrrrruuuuulldlDuruuUUllulldRRldddlluRdrUUdldddllllluuruuuurrrrrrdLddldddlUUluRRdrUUUruuLLdRurDldddlldddddrUUUUluRdrUUUUruLddddlddddrrururuuuuUruLLrddddddldDllluuuurRRlllddddrrddrruLdlUruLLrruuruUUUUruLddddllllldddddrUUUUluRdrUUUUdddrrrdrrddddLLLdlUruLLrruuruullllldddddrUUUUluRdrUUUddldddllllluuruuuurrrrRdddrrrdrrddlLulDDlddrruLdlUruLLrurruuullllldddddrUUUUluRdrUUUddrrrdddrDrdLLLdlUruLLrurruuullllllLrrdddlluUlUUUluRRRRlllddddrruLdlUUUluRRRlldddrdddrUUddddrrUUUUluRdrUUdllLLdlUUUluRR",
  },
  {
    stage: ` 
      #########
      #       #
      #$ $$$  #
      #   # $ #
      #   $@$ #
    ###$ $ # ##
    #   $#$# #
##### #  #   #
#...  # $# ###
#.....   # #
#.....# $# #
########   #
       #####
`,
    solution:
      "LLulldDDDrUllldddrrrUdllluuurrdDrdLLLLLLrrrrruuuuuurrdLulDDDDDrdLLLLLrruuurrrUluurrdLulDDDDDrdLLLLrrruuuuurrrdLLulDDDDrdLLLulDrrrurUUluurrdLulDDDDrdLLLdLLLrrUrrrruuuuuuuulDDDDDDDrdLLLuLLLrrDrrruuuuuuuurrDDDrdLLulDDDDrdLLLdLLrUrrruuuuuuuurrrrDLLLulDDDDDDDrdLLLuLLrDrrruuuuuuurrrrrrddLLLLLulDDDDDrdLLLdLUrrruuuuuuurrrrrDrdLLLLLulDDDDDrdLLLuLDrrruuuuuuurrrrDrdLLLLulDDDDDuuuurrrrrdddllUUddddddllUULLLrrrUUUluurrdLulDDDDrdLLruuullddDrruuuuuuurrrrddLLLulDDDDDrdLL",
  },
  {
    stage: ` 
 ##### ######
 #   ###    #
## $ $ #$ #$#
#  $ @ $  $ ##
# #  ## #....#
#  ## $ #.##.#
##  $    ....#
 # $$ #$#....#
 #   #   #$ ##
 ##### $    #
     ####  ##
        ####
`,
    solution:
      "rRdddrruuuuurrDDuulldddddlluuuRldddrrrrruuLuuulldDDDuulldddrRRRdrUUdllluuuRluulDurrrdDlldddlluuuRurDDDuulldddrRRRdddlUrurUllldRRddlllulldRRRdrUUruulldRluuuullllluullddRRRRRRurDDDDuuullllllllddrdrRRRluRdRRRRRlluuullllluulDldRRRRRRurDDullluLdlluurDldRRRRRurDlldDldRRRRllllllllddrUluRRRRRRRllllllddrUluRRRRRlDDldRRRdrUU",
  },
  {
    stage: ` 
####
#  #
#  ##########
#    ##     #
#..#    $$# #
#..  ##   $ ###
#..#  ##$# $  #
#..   # @$ $  #
#..#  # $ $   #
# .   # $ $ ###
#  #  #   ###
#  #    ###
#########
`,
    solution:
      "lddddllluuuuuuurrrdrrRddRddLruuluullluurrDulldllldddddddrrrurrUrruuluuLuLLLLrrrrdrddrddlldlldlluullluuuuuurrDrrrdRullllDDrdddddrruuuurUUddldddrrurruuluuLuLLLLrrrrdrddrddlldlldlluuuuLLLdlUUUruurrDDDrdddddrruuuuruUruLLLLrrrdddlddddlluuuuLLLdlUUruuurrDDDrdddddrruuRUUUUruLLLLrrdrrrddLrrddlLUlldddlluuuuLLLdlUruuuurrDDDDDrdddrruuurUUUruLLLLrrdrrrddLdlldddlluuLLLdlUruuuuuurrDDDDDrdddrruuurUUUruLLLLrrrdddlddddlluuLLruulluuuurrDDDrdddddrrurUUUUUruLLLLrrrdddrrrdLLdllddlluuuuLLLdDuuuuuurrDDDrdddddrruurUUUUruLLLLrrrdddlddddlluuuuLLruulluurrDDDDrddddrruuurrrrrruLLruLdLUdLdlUUUruLLLLrrrdddlddddlluullluUUUUUrrDDDuurrrurrrrdDLLrddrruLdlUdlluUruLLLLrrrdddlddddlluuuuLLruulluurrDDDuurrrurrrrddLLrddlluUruLLLLrrrdddlddddlluuuuululluuluurDDrrDrrrrdddlddddlluullluUUdddrrruuLLrrddllluUddlddrUUrrddrrruruuuuuullllDDrdLLrDrdLL",
  },
  {
    stage: ` 
         #####
        #     #
       #  $##  #
      #  #   $ #
#  #  # #  # # #
 # #  # $ $  $ #
  ####### #$#  #
  #  $ $      #
  #@..$ **.###
   #......#####
    ############
`,
    solution:
      "rdrrruLuLDrdLrrrrULuLDrrruLuuururrddlLulDDDDldLLruuRdrrurrruruuuLLddllldDrdLulDurrrrruruLLLLulDDDrdLLulDlluRRdrruuurrDurrddlLLruulldDrdLLLulDllluRRdrruRdrruruulldDrdLLLLLuRRRdrruruuruuruulllDDDlddDrdLLLLurrrrruuLulDDDrdLLruuurrruuLrruullldlldlddRluururrDDlDDDldRurruuLulDDDllldR",
  },
];

export default levels;
