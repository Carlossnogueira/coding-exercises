commission_rate = 0.05
seller_id = input("Seller ID: ")
part_code = int(input("Part code: "))
unit_price = float(input("Unit price: "))
quantity_sold = float(input("Quantity sold: "))

total_sold = unit_price * quantity_sold
seller_commission = total_sold * commission_rate

print(f"Seller ID: {seller_id}\nPart code: {part_code}\nTotal sold: {total_sold}\nSeller commission: {seller_commission:.2f}")
