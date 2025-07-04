def calculateMedia(min,max):
    return (min + max ) / 2

min = int(input("Write min stock value:"))
max = int(input("Write max stock value:"))

print(f"Media: {calculateMedia(min,max)}")