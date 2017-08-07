function Bundle() {
  this.execute = function () {
    // Action executed successfully - status 0
    print("Hello armada!");
    return 0;
  };
  this.validate = function () {
    // Validation executed successfully - status 0
    return 0;
  };
  this.commit = function () {
    // commit commands - no exit code
  };
  this.rollback = function () {
    // rollback commands - no exit code
  };
}

