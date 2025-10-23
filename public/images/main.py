import os, sys
from PIL import Image
import glob


path = "./public/images"
dirs = glob.glob(path + '/*')

count_dirs = 0

while count_dirs < len(dirs):
    # folder = dirs[count_dirs].replace(path + "\\", "")
    folder = dirs[count_dirs]

    images = glob.glob(folder + '/*')
    # print(images)

    print(folder)
    print("===============")
    count_files = 1

    while count_files <= len(images):
        os.rename(images[count_files -1], folder + "/ss-" + str(count_files) + ".png")

        count_files += 1
    count_dirs += 1
# print(dirs)