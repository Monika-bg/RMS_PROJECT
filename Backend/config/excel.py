import pandas as pd
import os

file_path = os.path.join("housing.csv")

csv_file_path = os.path.join(file_path, "housing.csv")
# excel_file_path = os.path.join(file_path, "housing.tgz")

csv_data = pd.read_csv(csv_file_path)

print("CSV file Information:")
print("Number of rows:", csv_data.shape[0])
print("Number of columns:", csv_data.shape[1])
print("Column names:", csv_data.columns.tolist())
print("Details about columns and data types:")
print(csv_data.info())
print("Categorical value counts for 'Ocean-proximity':")
print(csv_data['Ocean-proximity'].value_counts())
print()
print("Summary statistics for CSV file:")
print(csv_data.describe())

# excel_data = pd.read_excel(excel_file_path)
# print("Excel file Information:")
# print("Number of rows:", excel_data.shape[0])
# print("Number of columns:", excel_data.shape[1])
# print("Column names:", excel_data.columns.tolist())
# print("Details about columns and data types:")
# print(excel_data.info())
# print("Categorical value counts for 'Ocean-proximity':")
# print(excel_data['Ocean-proximity'].value_counts())
# print()
# print("Summary statistics for Excel file:")
# print(excel_data.describe())
