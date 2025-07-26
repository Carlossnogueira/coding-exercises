fuel_efficiency = 12  # km per liter
average_speed = float(input("Enter the average speed of the trip (km/h): "))
time_spent = float(input("Enter the time spent on the trip (hours): "))
distance_traveled = average_speed * time_spent
liters_used = distance_traveled / fuel_efficiency

print(f"\nTrip Results:")
print(f"Average speed: {average_speed} km/h")
print(f"Time spent: {time_spent} hours")
print(f"Distance traveled: {distance_traveled} km")
print(f"Fuel used: {liters_used:.2f} liters")
