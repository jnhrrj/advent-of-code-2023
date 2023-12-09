const input = `Card   1: 59 65 20 66 55 92 43 23 98 70 | 99 81 56 30 88 55 57 11 90 45 53 28 33 20 84 54 24 64 74 98 36 77 61 82 69
Card   2: 62 76 53 69 70 72 81  1 67 78 | 62 24 60 72 67 76 25 46 40 26 28 57 69 70 78 79 81  1 11 15 30 63 68 37 53
Card   3: 87 81  7 92 88 66 58 22 13 59 | 42 18 31 11 17 62 46 52 22 48 83 99 93  2 26 28 88  4 56 20 25 43 82 89 44
Card   4: 13 92 15 50 49 10 58 44 84 81 | 69 16  2 58 27 49 67 31 47 53 35 89 75 20 96 44 50 92  3 98 15 81 84 13 10
Card   5: 49 18 23 93 19 52 76 15 86 72 | 18 62 86 49 93 52 43 22 23 35 76 25 79 31 15 10 32 47 72 98 19 71 81 13 39
Card   6: 49 22 40 83 92 30 16 96 80 93 | 30  5 93 66 49 10 83 55 22  6 40 43 80 84 29 74 34 16 39 31 92 56 96 68 65
Card   7: 68 50 47 21  2 34  5 44 70 93 |  5  2 37 83 13 25 82 44 90 34 22 16 14 52 50 68 77 75 70 21 31 64 93 47 88
Card   8: 93 39 80 58 10 50 47 81 20  4 | 30  4 55 36 68 39 90 20 81  7 58 93 13 47 85 10  8 96 11 80 99 91 50 72 51
Card   9: 55 66 20 93 39 53 81 60 33 17 | 67 25 55 24 81 58 66 17 78 60 64 50 39 53 87 56 91 93 77 41 20 84 40 33 22
Card  10: 74 97 78 99 48 33 36 30  3  8 | 72  2 22  8 12 74 50 73 33 99 60  3 30 91 36 41 97 42  9 54 79 17 78 88 48
Card  11: 97 39 21  1 30 81 76 74 31 60 | 97 99 93 74 31 86 76 62 90 63 21 40 81 18 52 39 13 22  1 30  8 45 60 34 80
Card  12: 70 54 10 42 49 22 81 27 60 59 | 96 27 61 93 54 90 62 20 55 65 84 29 73 14 89 70  1 63 68 32 22  3 10 11 18
Card  13: 84  3 12 29 13 94 90 70 57 10 | 75  3 65 70 19 27 13 34 89 57  2 73 91  4 29 92 37 94 60 36 10 51 85  6 71
Card  14: 25 10 50 56 96 33 68 35 72  7 | 90 92 65 48  5 70 28 82 19 11 58 74 27 30 18 39 67 76 37 83 29  9 32 17 80
Card  15: 66 90  2 45  3 63 57 42 61 93 | 67 83 63 65 66 34 62 42 36 29 76 12 40 26 90 41 61 11 98  5 70  1 94 74 51
Card  16: 44 98 35 36 23 76 81  5 72 78 | 98 94 44 46 53 43 93  5  2 38 51 78 33 23 57 26 66 12 62 72 31  9 82 14 13
Card  17: 93 36 58  8 28 57 87 97 88 81 | 27 32 25 58 85 50 75 99 71 37 62 60 40 33 84 54 34 87 10 29 80 23 20  9 91
Card  18: 64 32 84 80 83 31 23 99 81 56 | 76 39 61 86 38 50 94 49 96 31 48 53 17 72 93 64 40 69 99  5 42 79 51 97 56
Card  19: 27 23 17 51 94 96 72 68 43 10 | 69 89 70 51 44  2 64 56 63 26 84 25 19 15 20 83 62 32 34 79 45 98 23 61 58
Card  20: 70 40  1 24 63 54 96 62 34 56 | 65  8 46 27 55 75 34 67 11 61 21 78 83 12 19 13 30 25 23 60 86  7 38 44 92
Card  21: 24 58 77  6 27 92 73 80  7 96 | 84 17 30 12 31 44  5 11 41  2 13 47 78  4 33 90 54 65 37 43  3 15 69  8 59
Card  22: 79 81 85 60 75 16 88 59 24 86 | 79 56 63 44 77 67  1 41 99 74 96 54 42 61  5 78 33 72 55 18 89 80 45 98 26
Card  23: 71 77 83 98 79 55 27 21 51 52 | 90 58 10 92 49  8  1 81 50 23  2 56 44 12 66 94  4 30 39 73 24 40 76 45 48
Card  24: 57 80 11  9  2 58 63 32 40  7 | 57 88 85 21 66 49 43 41 60  9  2 56 11 73 71 18 58 93 91 40 32 26 80  7 63
Card  25: 62 27 80 53 26 18 29 45 20 54 | 98 41 18 68 16  8 53 45 20 62 24 27  2 21 54 91 28 96 49 43 83 29 26 52 80
Card  26: 12 28 80 33 11  8 22 72 67 89 | 49 63 58 85 89 74 11 76 44 28 95 80 36 37 30 93  6 22 19 39 38 33 54 46 43
Card  27: 81 97 60  5  6 99 30 57 93 56 | 81 70 11  6  5 57 10 56 71 50 75 42 47 30 76 91 69 36 78 74 64 93 79 97 28
Card  28: 45 69 22 27 23 82  9 26 76 74 | 72 76 82  7 50  5 95 23  8 85 86 58 24  9 22 83 67 60 64 27 84 74 69  6 56
Card  29: 47 94 41 38 46 62 59 79 51 37 | 15  6 70 38 80 68 47 41 62 77 59 60 79  1 34 94 51 46 89 40 31 45 39 99 37
Card  30: 96 54 53 74 94 48  6 44 43 60 | 77 57 79 33 44 22 75 58 91 61 21 19 43 98 27 72 69 45 53 68 71 66 81 78 12
Card  31: 77 25 43 56 86  4 83 21 68 96 |  6 63 95 38 42 85 34 28 79 33 41 46 53  1 89 32 36 69 17 40  5 73 70 47 99
Card  32: 90 94 89 27  1 35 37 71 81  8 | 11 98 10 66 38  2 19 82 96 39 18 85 81 15 29 36 40 13 41 23 31  5 57 92 47
Card  33: 15 21 67 53 94 33  4 78  1 59 | 15  9 38 96  4 53 59 88 33 43 94 98 20 99 74 31 92 14 67 12 78 69  1 21 24
Card  34: 75 13 40 22 38  5 19 92  7 86 | 33 48 75 10 12 18 87  1 27  4 73 38 68 55 89 70 56 95 19  7 28 24 83 41 65
Card  35: 83 78 71 74 36 43 73 99 12 97 | 75 89 50  5 45 62 27 60  1  6 77 92 98 64 67 24 78 65 47 21 22 10 17 13 81
Card  36: 49 64 75 48  9 20 84 70  2 93 | 61 73 81  7 50 30 96  9 63 52 60 64 43 95 88 80 70 48 78 22 42 27 49 13 36
Card  37:  6 56 20 52 80 39 74  8 90 58 | 23 86  2 35 59 57 96  4 45 72 42 79 36 75 19 87 91 85 28 78 89 95 73 20 50
Card  38: 52 66 11 27 86 83 50 12 22  1 | 61 62 84  2 38  7 54 11 37 35 36 53 25 14 89 44 20 46 48 96 31 40 52 99  5
Card  39: 97 83 47 76 84 38 49 90 96 39 | 11 15 23 58 76  8 27  5 77 69 32 33 50 93 84 63 56 91 44 28 97 66 90 36 34
Card  40:  9 86 62 58 26 18  7 63 10 71 | 31 72 89 84 64 35 36 30 57 41 39 55 17 73 10 53 85  8 90 45 86 34 67 98 95
Card  41: 81 53 98 24 12 23 78 70 39 21 | 56 30 17 13 80 10 64  8 63 39 43 26 34 84 94 95 89 86 44 67 75 38 54 22 41
Card  42: 71 84 63 31 83 15 72 14 11 23 |  7 82 98 53 16 48 20 15 59 14 78 54 28 57 51 64 13  4 86  5 85 96 46 36 44
Card  43: 21  1 30  7 34 33 91 51  6 85 | 22 69 36  8 80 52 78 63 65 82 84 15 66 92 16 46 54 50  1 44 14 81 39 72 53
Card  44: 21 84 95 43 66 57 10 91 29 62 | 23 33 60 56 98 31 24 13 20 81 76 85 16 34 39 35 65  2  4 47 70 86 19 53 78
Card  45: 20 32 12 19 46 65 44 52 33 74 | 28 67 88  4 58 17 92 94 93 41 50 83 43 76 23 21 81 64 95 24  1 72 22 89 91
Card  46: 62 97 17 77 10 29 60  6 44 59 | 44  8 67 97  7 63 10  6 29 31  2  5 60 24 26 49 68 35 13 93 69 46 20 79 99
Card  47: 27 31 55 71 32 65 23 22 37  4 | 67 86 82 13 81 54 18 19 39 96 49 42 48 98 84 28 79 59 12 11  3 76 43 71 45
Card  48: 27 66 28 93 98 49 11  2 63 43 | 25 10 32  5 43 38 22 46 39 66 31 26  9  2 53 28 42 93 47 71 44 99 27 73 49
Card  49: 10 64  3 84 65  4 23 29 34 19 |  4 74 11 24 48 71 75 55 57 18 85 29 62 14 33 15 72 77 87 91 78 54 63 50 10
Card  50: 82 71 91 44 67 46 26 16 61 59 | 81 87 51 41 66  9 49 37 25 89  3 62 94 45  6 74  2 92 95 73 84 76  5 65 58
Card  51: 10 80 36 32 51 71 75 49  2 59 | 53 38  2  8 50 59 51 44 45 70 71 62 14 63 84 10 29 57 27 73 31 32 20 19 35
Card  52: 14 21 16 25 82 13 43 97  3 93 | 76 11 94 95 42 69 74 84  2 26 54 73 89 60 70  8 36 97 52 78 48 27 47 87 59
Card  53: 63 42 80 34 18 35 46 99 20 59 | 21 87 89 91 30  2 72 47 16 88 99 29 23 10 26 85 33  7  5 11 32 36 67 97 95
Card  54: 90  8 74  3 37 20 95 71 15 91 | 82 49 24 81 88 83 26  8 53 14  9 31 47 19 77  3 39 50 92 40 67 44 99 28 78
Card  55: 14 52 73 59 50 20 90 38 64 60 | 98 19 89 64 83 57 24 61 78 74 27 76  8 99 34  2 97 96 48 21  6 80 25 23 29
Card  56:  5 24 44 83 93  8 62 68 90 13 | 95 75 22 93 73 36 66 34 71 53  2 40 43 44 78 98 29  8 16 14 25 37 67 92 86
Card  57: 19 71 75 82 77 98 84 88 20 68 | 27 81 80 28 14 31 99 94 68 95  3 29 66 13 25 63 56 89 88 43 55 79 97 39 45
Card  58: 63 82 14 86 21 92 23 32 57 61 | 95 58 35  5 83 90 64 51 17 91 73  3 87 77 68 38  1 45 18 49 70 65 98 88 56
Card  59: 53 72 75  5 80 31 77 56 88 34 | 61 35 83 32 54 55 36 95  1 58 63 40 76 51 94 26 92 87 65 45 27 30 79 20 57
Card  60: 63 72 19 80 20 73 12 48 88 55 | 63 13  5 20 73 56 49 80 59 85 55 31 33 28 47 97 65 12 58  7 19 30 48 72 17
Card  61: 90 14 63 83 11 56  8 98 31 96 | 72 47 43 11 14 88 94 60  8 74 62 56 96 10 90 42 52 31 63  1 98 57 23 51 83
Card  62: 60 10 96 25 46 70 74 91 97 45 | 78 89 87  7 45 33 25 92 70  5 99 15 71 74 48  4 97 41 46 31 91 85 76 10 96
Card  63: 66 17 29 74 18  8 51 88 54  5 | 52 14 15  8 45 97 91 22 66 11 54 25 55 42 65 77 32 29 51  4 46 93 80 23 28
Card  64: 23 77 44  6 97 42 49 47 58 54 | 77 97  6 27 54  1 25 38 64 41 44 82 33 70 58 55 84 47 45  7 23 19 42 49 61
Card  65: 56 98 65 36  3 25  2 21  7 46 | 69 97 72 98 43 83 22 56 66 25 46 65  4 95 73 23 10 54 58 85 84  3 77 67 21
Card  66: 29 60  9  6 86 78 52 58 32 43 | 16 59  7  8 66 44 63 96 71 19 72 56 65 46 78 50 36 67 81 42 23  2 74 49 53
Card  67: 51 70 24 69 35 39 77 60 92 33 | 19 90 11 74 92 35 93 17 22 77 40 78 55 45 23 79  1 47 60 36 84 61 99 26 49
Card  68: 23 16 77 57 71 13 74 52 12 37 | 47 99 12 17 31 66 35 59  1 72 43 79 81 42 77  4 92 38 27 49 71 23 14 96  9
Card  69: 30 57 69 53 47 95 70 86  7 55 | 17 73 50 20 43 35 83 59  9 84 81 58 32 78 54 21 76 57 98 87 10 34 70 90 14
Card  70: 57 40 66 24 49 63 30 59  3  9 | 49 40  8 69 79 36 57 34 42 81 39 44 23 77 26 33 53 82 91 20 65 19  9 87 72
Card  71: 54 95 96 30 29 32 38 83 97 56 | 22 68 87 45 28  7 40 89 26 75 99 92 16 76 17 41 51 39 71 66 62 53  2 61 46
Card  72:  8 70 86 57 71 68 33 11 22 18 | 15 87 64 96 65  3 43 97 61  1 93 73 48 60 76 22 39 23 52 79 37 34 28 90 40
Card  73: 16 37 32 49 36 18 68 51 17 92 | 56 85 93 59 62 88 31 11 27 66 22 63 61 35 25 80 52 83 26 64 53 47 74 19 46
Card  74: 54 28 88 50  8 11 57 52 53 19 | 96 53 45 35 27 77  2 88 32  4 40 41 52 78 84  3 70 13 76 55 18 33 90 74 29
Card  75: 32 29 31 73 70  6  7 72 82 58 | 26 43 39 51 63 47 78 88  1 59 35 66 58 96 50 30 67 85 52 71 37 80 64 42 94
Card  76: 27 71 12  9 72 85 74  2 30 10 | 83 88 53 86 38  1 21 98 37 17 20 40 23 39 31 13 22 89 36 80  4 45 65 91 81
Card  77: 11 62 63 89 94  9 36 46 83 75 |  5  4 30 25 69 90 34 73 82 27  6 39 99 98  1 66 37 48 67 91 59 50 54 21 97
Card  78: 43  1 69 54  7 60 47 70 33 79 | 93 70 31 92 98 52 41 48 71 47 32 19 82 56 24 33 54  1 69 60 79 45 14 43  7
Card  79: 40 23 29  1 62 55 20 46 18 68 | 99 94 68 17 72  4 37 62  1 20 29 28 40 25 12 46 18 84 30 23 49  7  6 55 75
Card  80:  8 25 56 40 30 46 42 95 38 48 | 47 71 89 80 30 87 72 57 25 73 15 69 46 34 35 65 55 81 95 39 26 10 48 40  7
Card  81: 23 53 41 78 27 26 15 49 21 65 | 21 14 87 68 63 78 15 22 49 58 41 67 12 13 59 72 98 65 27 26 24 34 23 53 96
Card  82: 37  7 54 90 79 20 89 58 94 61 | 85 37 57 21 35 20 69 40 84 10 28 87 54 67 98 77 58 90 41 15 89 39 52 79 43
Card  83: 38 49 32 53 19 30 24 51 43 97 | 18 30 71 97 49 38 42  1 27 24 53 10 15 95 60 32 45 86 19 43 56 74 63 28 51
Card  84: 97 46 88 63 17 90 37 73 12 42 | 37 73 74 32 99 97 38 81 93 56 63 78 11 28 75 90 62 45 14 21 41 23  9 12 94
Card  85: 18 56 28  7 16 73 75 78 14 58 |  7 73  9 56 14 24 75 28 26 57 62 55 85 21 48 45 18 78 40 86 58 68 72 10 88
Card  86: 15 31 40 17 25 38  1 64 99 97 | 67 63 79 78  9 38 15 14  2 95 99 10 90 33 86 40 97 98  1 64 25 17 62 84 31
Card  87: 68  5 20 87 89 69 66 25 45 48 | 89 15 87 33 66 39 85 48 13 45 96 61 83 57 68  5 69 55 20 25  9  2 36  1 28
Card  88: 80 88 27 58 19 71 30 84 36 25 | 64  6 48 14 79 92 56 49 99 47 27 63 33 35 66  7 83 71 84 87 52 13 15  1 57
Card  89: 51 89 69 25 61  7 44 12 41 86 | 89 51 45 75 61 12 41 77 57 48 25  1 69 86 14  5 66 11 20  2 47 44 37  7 65
Card  90: 84 70 42 53 91 76 39 96 37 34 | 50 48 91 70  3 29 34 64 20 16 96 27 42 37 44  8 39 60 53 59 92 43 75 74 17
Card  91: 88  1 78 82 71 85 52 56 28 63 | 66 92 94 93 22 50 51 16 20 49 96 34 12 53 32 28 40 88 98 68 15 29 25  1 47
Card  92: 50 71 20  8 90 76 66 19 31 99 | 87 72 82 44 33 61 42  5 58 48 31  7 75 91 26 69 46 39  6 17 65 89 60 28 36
Card  93: 23 93 13 28 44 96 10 99 29 79 | 24 47 29 83  8 78 45 81 87 13 58 93 88 46 10 17  6 61 28 96  1 79 89 38 99
Card  94: 62  9 30 28 24 54 50 59 29 36 | 19 76 39 55 63 27 28 98 90 70 59 30 61 95 32 89 72 62 68 15 67 69 74 50 96
Card  95: 65 59 45 35 74 93 58 46  1 44 | 71  6 35 59 37 94 57 44  5 68 84 40 89 82 79 74 85 78 15 98 39 42 96 46 75
Card  96: 14  9 26 61 65 13 77 36 74 56 | 78 66 92 63 88  6 83 42 20 36 15 41 32  1 26  9 61 87 56 35 58  4 95 96 80
Card  97: 91 72 89  9 29 35 47 17 80 51 |  2 69 18 76 16 56 30  7 52 62 63 17 72 57 91 60 92 54 83  9 50 49 55 81 96
Card  98: 83 24 60  6 57 81 20  1 56  4 | 44 25  3 61 21 38 48 73 96 15 20 51 59 70 87 39 17  1 53 45 92  6 26 31 82
Card  99: 80 10 93 36 85 83 29 76  5 81 | 60 70 58 18 27 52 92  8 57  4 74 21 36 10  2 14 43 30 37 40 15 54 32 91 56
Card 100: 13 90 34 17 74 39 42 47 43 46 | 59 77 80 31 85 48 30 27 38 99  2 62 67 26 24 33 50 73 60 44 70 58 40 17 78
Card 101:  7 94 67 15 73 65 10 23 18 85 | 76 86 32 52 63 79 64 90 99 89 37 36 59 68 75 92 19  9 42 66 78 69 62 29 91
Card 102: 86 31 75 67 19 25 90 52 70 16 | 34 78 82 58 60 14 62 88 70 11 41 83 22 77 85 19 94 40 12 44 57 76  1 56  8
Card 103: 47 38 21 86 22 15 12 60 75 64 | 47 60 85 87 84 78 19 20 75 15 17 21 22 42 44 16 92 86 76 64 65 28 51 38 12
Card 104: 48 43 45 59 22 98 35 75 47  3 | 46 13 99  6 54 30 71 52 90 27  8  5 21 28 40 41 17 80 91 72 29 65 62 89 32
Card 105: 13 49 12 35 96 10 80 40 71 81 | 96 51 84 99 83 24 94 47 26 52 97 16 22 12 46 27 13 60 81 63  2 19  3  1 80
Card 106: 56 77  9 93 48 89 69 31 72  7 | 78 95  8 18 27 39 98 96 41 31  2 15 57 88 34 70 99 54 62 92  9 55 86 90 80
Card 107: 32 16 27 66 41  5 42 59 48 21 |  5 30 84 56 93 53 42 80 32 57 61 14 41 40 31 25 83 38 73 21 85 20 44 10 92
Card 108: 19 16 90 42 37 47 17 58 91 41 | 10 29 43 50 19 76 47 44 41 55 42 59 58 54 25 90 71 37 16 91 65 82 61 95 17
Card 109: 75 63 51 46 49 19 86 81 21  7 | 64 95 94  1 24 84 39 44 33  3 27 43 54 76 68 28 93 15 30 47 29  6 37 88  5
Card 110: 12 24 20 53 39 13  4 55 58 96 |  2 62 43 17 95  7 84 72 15 93 57 63 10 11 38 52 30 26 60 44 66 86 67 35 46
Card 111: 68  5 52 14 47 63 40 26 82 60 |  5 56 46 68 78 50  7  9 17 60 10 14  1 92 36 61 54 51 47 43 89 77 86 52 69
Card 112: 83 90 93 65 80 68 43 75 49 63 | 29 97 52 59 86 18 26 36 54 68  7 10 55 17 98 43 76 27 42  1  9 48 80 61 92
Card 113: 84 65 39 16 94 44 99 46 69 59 | 94  9 64 58 55 99 39  4 72 90 77 65 11 26 47 84 62 25 59 16 46 20 69 60 44
Card 114: 76 26 27 51 53 48 86 36 59 78 | 59 50 85 38 70 88 72 32 48 86 24 69 35 91 53 45 80 97 27 41 12 49 44 95 98
Card 115: 11 14 64 38 13 54  9 78 50 51 | 15 51 42  7 24 93 56 21 96 54 79 60 98 90 35 94 32 17 71 64 26 27 31 75 89
Card 116: 69 73 11 44 94 36  1 48 33 13 | 59 97 56 53 88 18 10 46 95 58 66 31 68 87 12 54 43 22  2 49 83 93 27 42 96
Card 117:  5 88 91 85 52 23  9 98 53 37 | 20 62 32 80 83 51 28  3 50  9 35 34 49 14 11 44 91 12  2 33 53 17 18 88 10
Card 118: 34  8 36 44 98 75 31 85 13 65 | 67 17 35 99 21 77 38 14 75 71 16 87 11 54  7 80 60  5 79 65 98 32 20 55 93
Card 119:  2 71 58 65 72  1 75 18  9 93 | 30  1 77 55 41 97 62 79 33 13 99 52 76 38 70 16 81 44 58 37 98 29 82 19 71
Card 120: 63  6 51 30 60 18  8 96 54 39 | 60 27  7 47 93 34 96  4 86 72  6 13 25 94 85  8 90 98 63 91 17  2 38 15 11
Card 121: 75 25 39 93 62 48 31 98 20 96 | 73 37 79 62 59 95 66 63 93 28 10 47 32 67 80 43 96 44 84 31 38 85 99 15 18
Card 122: 76 15  5 61 73 27 97 17 69 64 | 96  3 39 12 38 94  1 48 99 97 50 67 53 51 84 86 88  6 19 65 49 15  2 20  5
Card 123: 39 42 60 94  9 57 82 32 10 20 | 86 32  4 78 96 30 72 48 91 46 90 22 24 51 84 50 49 74 97 19 25 76 37 47 79
Card 124: 98  8 50 26 81 52 83 90 67 36 | 66 20 92 31 10 29 73 80 67 44 71 39 65 21 99 22 97 51 38  3 95 87 90 15 79
Card 125: 46 11 16 34 37 70 13  3 78 35 | 92  7 64 66 32 67 79 84  1 12 54 82 44 58 61 15  2  6  9 14 18 25 21 22 69
Card 126: 73 96 48 49 52 80 36 83 20 53 |  4 90 86 34 68 66 32  9 92 79 47 81 45 74 33 85 63  5 55 24  3 54 18 27 12
Card 127: 58  9 97 77  5 45 91 50 81 53 | 10 67 24 91 97 53 77 81 47  8 96 72 50 34 63 45  7  1 99  5  9 14 20 32 58
Card 128: 63 56 14 25 21 17 73 74 59  5 | 87  9 59 21 76 73 32 72 20 94 14 75 29 67 63 17 45 90 25 91 56  5  1 74 26
Card 129: 64 84 67  7 10 90 94 86 99 42 | 39 12 94 90  4 71 67 50 86 96 44 64 42 99  7 83 10 20 48 15 69 78 45 62 49
Card 130: 18 14 37 87 91 22  6 52 72 74 | 44 51 32 29 49 66 46 81 91 14 23 67 98 19 13  1 10 22 38  3 45 33 71 64 72
Card 131: 70 88 79  2 21 37 41 95 54 25 | 49 12 95 54 14 41 37 75 92 53 82 48 70 36 90 44 88 19 60 38 25 29  2 21 79
Card 132:  4 38 37 34 36 62 86 16 64 53 | 85 66 23 49 56  1 78 13 47 82 83 72 76 96 22 18  2  8 98 89 97  9 52 55 16
Card 133: 55 78 45 23  9 34 65  5 86 32 | 79 64 19 53 30  6 51 78 81 89 96  1 97 62 99 69 48 43 33 84 65 12 25 94 63
Card 134: 79 54 65 49 20 25 81 84 60 90 | 34 42 93 14 56 41 38 50 68 83 33 37 85 88 78 64 94 57 65 17 22 89 62 12 29
Card 135: 30 54 81 27  7 97 39 45 92 71 | 11 19 96 63 32 47 17 22 29 31 27 78 56 39  9 86 66 52 21 60 85 53 77  7 71
Card 136: 53 73 52 31 70 84 78 26 18 38 | 72 58 61 35 50 77 88 71 20 43 86  7  3 52 36 97 94 80 79 59 62 65 99 17 56
Card 137: 98 11 47 42 94 85 57  9 20 43 | 84 74 24 55 87 58 89 18  4 37 69 31 78 35 90 70  7 40 49 76 30  6 96 97 20
Card 138: 23 20 36 65 14 52 90 53 83 61 | 67 55  4 33 17 24 69 12 74 16 70 44 91 19 49 57 80 95 92 86 98 36 32 21 52
Card 139:  6 61 10 63 49 46 75 67 35 56 | 76 49 75 90 27 78 13  7 67 35 61 30 40 56  5 88 63 64  6 38 92 24 59 52  9
Card 140: 24 38  8 37 83 96  7 55 86 21 | 31 90 33  3 64 58 93 18 73 78  1 42 47 84 61 57 43 48 68  9 10 30 85 99 69
Card 141: 96 72 30 28 80 87 55 88 44 75 | 45 23 90 64 55  9 66 33 43 42 72 63 26  6 17 50 87 85 70 46 84 47 76 37 49
Card 142: 24 78 31 52 80 13  9 59 60 26 | 92 95 66 86 91 68 55 75 71 54 36 12 69 64 83  2 17 77 35 11 25  7 41 85 21
Card 143: 82  7 78 19 46 98 75 74 89 40 | 94 16 36 20 62 21 95 92 65 26 88 15 73 28 24  5  1 67 55 69 14 10 22 29 31
Card 144: 90 15 86 44  7 36 26 65 23 78 |  3 12 23 81 36 25 95 39 96 38 76 68  7 14 49 61 86 94 98 40 28 33 89 58 27
Card 145: 27 31 60 51 29 94 33 98 17  7 | 44 89 98 83 49  9  8 96 36  7 25 71 29 93 55 58 31 35 32 92  2 87 77 22 62
Card 146: 15  4  8 42 73 18 48 14 58 56 | 85 60  2  3 70 78 72  5 61 29 28 12 47 63 13 58 17 84 52 19 10 50 11 22 69
Card 147: 80 77 40 42 62 61 98 50 99 88 |  9 80 54 52  2 14 84 22 47 66 20 30 43 96 86  5 83 63 51 17 32 55 82  7 69
Card 148: 98  9 86  3 54 64 30 70 85 83 | 97 17 93 43 81  6 41 44 60 19 57 85  2 32 58 92 38 82 53  7 22 40 72 42 18
Card 149: 55 52 89 13 61  6 10 39 36 99 |  1  3 94 60 88 77 78 75  7 28 57 47  8 54 59 15  5 34 14 22 23 49 38 43 30
Card 150: 97 43 73 94 39 67 69 32 36 80 |  9 39 73 64 19 60 45 43  8 36 69 26 94 38 28 18 10 87 67 97 80 32 11 83 70
Card 151:  7 62 39 41 97 58 42 47 69 89 | 28 98 36 50 18 12 46 49 37 68 90 99 44 96  5 76 27 10 80 23 97 53 47 40 85
Card 152: 65 92 85 53  7 64 27 24 63 30 | 85 96 26 56 35 76 43 82 93 75 99 92 79 54 38 84 29 87 63  7 34 64 71 42 65
Card 153:  7 15 37 34 44 82 24 39 22 79 | 80 19 50 86 64 94 35  6  1 63 14 60 18 89 98 70 31 65 51 97 21 67 37 68 91
Card 154: 26  2 44 92 15 59 39 73 67 16 | 47 22 89 36 84 17 87 92 99 51 50 70 78 67 63 11 53 35 26 61 15 19 96 39 85
Card 155: 21 20 14 63 98 24 22 19 52 61 | 94 19 74 99 44 70 75 47 33 62 48 14 39 30 56 89 63 31 72 60 22 38 29 64 13
Card 156: 62 23  9 79 91 41 21 43 26 13 | 36 41 89  3 78 15 20 62 72 39 75 93 74 67 69 58 61 45 70 57 64 13  5 31 44
Card 157: 32 66 20 78 44 58 73 95 42 51 | 38 26 48 67 44 34 19 55 36 69  5 71 11 56 17 90 32 95 86 73 50  9 52 91 22
Card 158:  1 87 57 80 18  8 46 93 35 60 | 78 54 32 89 90 81 61 84 76 71  3 37 91 63 86 31 39 73 49 29 40 70 94 17 83
Card 159: 18 56 10 32 69 72 17 49 28 42 | 68 85 96  7 38 21 59 46 57 99 63 56 16 53 42 86 69 95  8 24 17 72 12 55 91
Card 160: 54 66 33 80 53 62 38 71 74 75 | 14 12 24  8 16 20 64 85 99 32 44 10 96 31 90  9 52 81 25 28 41 13 26 19 82
Card 161: 24 75 54 55 29 99 52 97 86 15 | 72 69 53 67 27 17 34 68 31  4 92 78 76 42 98 65 51 55  2 96 26 35 32 41 85
Card 162: 13 50 57  4 95 70 59 71 82 83 | 29 89 94 96 72  8 77 19 63 23 18  9 50  1 60 26 65 48 39 51 14 80 56 43 59
Card 163: 61 63 53 62 29 23 32 46 86 88 | 59 28 97 85 89 39 91 98 71  6 43 75 54 72 69 37  4 58  3 15 18  7 63 96 21
Card 164: 97 49 33 20 28 36 88 41 67 14 | 68 89 63 19 16 27 86 22 45 70 21 30  7 66 39 50 55 35 23 98 31 38 94 95 91
Card 165: 27 29 63 32 97 86  6 20 69  9 | 94 46 25 17 86 74  6 65 51 54 27 82 43 14 35 88  3 33 59 97 71 90 36 20 29
Card 166: 33 24 34 40 36 69 49 86 65 95 | 85 99 71 42 47 59 24 88 26 51 81 63 14 18 93 96 10 30 27 89 25 53 13 45 55
Card 167: 65 32 83 51 19 17 48 43 60 30 | 39 18 29 51  1 30 96 25 44 87 37 26 57 24 22 63 12 77 79 74 76 35 41 10 89
Card 168:  6 61 82 39 77 35 63 66 71 13 | 72 44 80  4 87 17 61 47 77 81 62 92 23 97 59  8 53 83 43 45 66 51 99 24 90
Card 169: 40 88 75 87 93 60 13 28 42 12 | 19 14 15 61 39  9 11 69 26 92 25 94 18 75 88 68 37  4 38  8 72 42 13 27 93
Card 170: 84 59 98 48 32 37 91 46 29 76 |  3 72 98 48 65 52 32 73 17 53 34 36 76 84 80 37 74 11 45 93 70 91 50 78 61
Card 171:  8 12 25 83 32 72 20 73 17 63 | 23 12 41 60 73 95  8 77 84 26 72  4 10  7 63 29 32 46 71 79 40 25  9 17 96
Card 172: 93 87 19 50 76 95 20 97 98 24 | 54 63 72 12 14 64 53 84 29 82 59 65 79 35  6 17  9  2 42 88 89 69 13 80 32
Card 173: 49 32 66 48 90 27 76 99 82 23 | 54 21 89  8 10 36 76 30 57 27 48 40 46 88 61  7 86 59 84 34 80 83  5  3 64
Card 174: 23 99 78 10 98 33  8 84 93 55 | 17 21 53 35 59 87  5 54 50 13  1 41 18 76 82 19 56 37 60 61  6 14 58 79 31
Card 175:  1 91  2 10 44 93 25 95 43 46 |  4 99 45 46 35 71 59 27  2 28 34 11 52 96 47 56 41 25 51 68 95 87 14 84 58
Card 176: 34 22 49 89 93 48 39 51  9 17 | 45 73 40 96 59 64 69 74 36 13 98 92 23 21 33 16 25 19 61 18 10 67 11 63  4
Card 177: 43  9 15 17 62 85 73 46 88 71 | 21 48  5 72 74 37 23 14 56  4 41 51 54 63  2 87 82 12 95 45 55 81 57 44 98
Card 178: 10 91 76 23 27 59 84  9 29 22 |  6 78 77 54 24  4 32 44 71 94 81 27 14 56 87 80 70 91 52 49 47 17 35 30 61
Card 179: 36 56 39 18 89 21 78  9 68 19 | 84 46 11 21 43 50 62 39 88 76 13 31 63 91 60 12 74  3  1 57  2 95 15 23 83
Card 180: 65 93 55 60  4 58 45 10 98 40 | 33 64 51 41 30 75 44 89 95 11 22 71 77  2 15  3 12 48 78 53 76 35 66 43 56
Card 181: 10 99 21 95 28 92 98 14 90 91 | 39 74 57 11 33 68 56 85 59 52 93 97  7 73 55 79 48 66 29 89 78 27 32 80 58
Card 182: 20 33 41 66 56 30 21 25 67 52 | 43 21 77 68 13 66 52 27 30 69 41 23 60 33  5 36  4 56 54 97 55 67 20 18 25
Card 183: 65 46 40 26 13 52 87 32 45 71 | 38 62 23 31 57 93 25 79  9 39 36 30 19 24 95 98 50 91 89 64 17 83 29 18 73
Card 184: 98 64 84 33 90 73 79 27 10 21 | 56 98 34 81 58 10 32 31 20 44 54 22 39 65 48 24 43 77 75 57 46 61 74 63  4
Card 185: 60 59  2 36 29 24 45 38  8 93 | 93 69 48 52 71 80 89 70 59 49 41 39 29 76 44 30 68 36 45 19  7 18 85 65 38
Card 186: 59 97 28 75  4 29 78 48 13 83 | 12 23 17 32 91 38 46 15  1 79 88 45 85 92 31 93 81 69  5 60 55 94 18  3 77
Card 187: 44 84 36 76 80 81 73 54 40 23 | 77 72 96 84 23  5 36 88 61 40 18 76 30 49 73 52 59 54 56 98 41  3 11 81 89
Card 188:  1 92 99 58 85 96 16  6 47 11 | 23 11 98 47 81 12 46 39 56 63 93 59 49 69 14 26  3 68 38 64 62 67 42 77 41
Card 189: 97 76 24 57 75 22  9 81 37  4 | 76 31  2 27 40 77 51 49 29 73 97 74 81 82 63 28 44 57 37 80  4 95 13 91  1
Card 190: 15 28 94 97 90  5 23 21 17 40 | 64 23 65 95 80 90 49 10 21 34 58 75 99 22 97 89 30 15 70 59 17  7 14 83 56
Card 191: 48 44 28 25 99 11 67 87 80  5 | 63 51 17 32 37 60 89 62 66  7 20 93  2 46 36 56 22  8 41 30 43 94 31 91 96
Card 192: 56 17 88 85  6 53 35  3 81 72 | 85 99 17 29 51  5 71 40 53 66 93 84 44 35 18 25 22 88 30 83 54 60 42 80  3
Card 193: 35 33 83 48 71 17 52  6 29 22 | 68 56 51 76 90 42 28 87 98 13  1 33 65 36 55 91 30 43 80 10 14 59  5 53 18
Card 194: 82  6 19  4 32 70 92 79 83 42 | 34 83 88 77 99 67 36 30 26 70 42 29 46 85 11 51 54 47 19 38 74 81 61 96 76
Card 195: 23 10 64 44 82  8 28  3 27 69 | 59 94 61 77 51 78 50 21 90 87  5 74 16 14 71 82 25 17  4 70 93 45 55 98 58
Card 196: 57 73 14 44 90 97 89 41 30 43 | 85 32 67 53 76 31 93  7 52  5 33 98 86 19 28 45 12 94  1 61 91 92 49 95 82
Card 197: 41  4  7 92 20 67 54 29 79 32 | 45 64 48 24 56 50 82 12 94 40 69 31 49 99 14 88  6 37 16 18  2 38 90 78 20
Card 198: 87  3 64 10 88 45 16 40 23 60 | 63 77 36 52 47 76 84 96 19 13 73 39 26 93 21 22  7 15 95 30 33 89 28 20 50`;

const testInput = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

//////////////////////////////////
////          PART 1          ////
//////////////////////////////////

// Conclusion: onced /\s+/ regex once more. A hundred more times and I know it by heart already
// Easier then expected compared with day 3's challenge. Let's look at part 2

let totalPoints = 0;

const inputRows = input.split("\n");

const anyNumberOfSpacesPattern = /\s+/;

inputRows.forEach((card) => {
  let cardTotalPoints = 0;
  const [_, subString] = card.split(":");
  const [left, right] = subString.split("|");
  const winningNumbers = left.trim().split(anyNumberOfSpacesPattern);
  const myNumbers = right.trim().split(anyNumberOfSpacesPattern);

  const numOfWinners = myNumbers.filter((num) =>
    winningNumbers.includes(num)
  ).length;

  if (numOfWinners > 0) cardTotalPoints += Math.pow(2, numOfWinners - 1);
  totalPoints += cardTotalPoints;
});

console.log(totalPoints);

//////////////////////////////////
////          PART 2          ////
//////////////////////////////////

export default 4;
