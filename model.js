function Bundle() {
  this.execute = function () {
    var Runtime = Java.type('java.lang.Runtime');
    var File = Java.type('java.io.File');
    var command = "python " + getProperty('bundle.system.path');
        + '/' + getProperty('bundle.product.name')
        + '-' + getProperty('armada.py.main.file');
    print("> " + command);
    var workDir = getProperty('armada.py.work.dir');
    print(" > " + workDir);
    Runtime.getRuntime().exec(
          command,
          [],
          new File(workDir));
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

