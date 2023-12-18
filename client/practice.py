# Loops

# for i in range(1, 6):
#     print(i*i)

#counter controlled
roll = [10, 20, 30, 40]
for i in roll:
    print(i)
else:
    print("list done")

# condition controlled

hadi = int(input("enter num: "))
sum = 0
i = 1
while i <= hadi:
    sum = sum + i
    i = i+1
# print('The sum is ', sum)

# function 
def join():
    first_name = "hadi  "
    last_name = "worliwala"
    print(first_name + last_name)

join()
