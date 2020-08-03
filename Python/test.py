import mysql.connector

#mysql connector
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="paraskevas",
  database="dnd"
)

#mysql python insert
#mycursor = mydb.cursor()
#
#sql = "INSERT INTO test_table (patient_id) VALUES (%s)" % ('2')
#mycursor.execute(sql)
#
#mydb.commit()
#
#print(mycursor.rowcount, "record inserted.")


mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM dnd")

myresult = mycursor.fetchall()

for x in myresult:
  print(x)