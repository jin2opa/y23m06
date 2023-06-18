class CheckId:
  def __init__(self, id, pw):
    self.id = id
    self.pw = pw
  def checkId(self):
    if self.id == "jin" and self.pw == "111":
      print("yes")
    else:
      print("no")