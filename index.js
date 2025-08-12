


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

function createLoginTracker (userInfo, maxAttempts = 3) {
    
    
    let attemptCount = 0;
    let accountLocked = false;

    const handleLoginAttempt = (passwordAttempt) => {
      if (accountLocked) {
        return "Account is locked. Please contact support.";
      }

      attemptCount++;

      if (passwordAttempt === userInfo.password) {
        accountLocked = false;
        attemptCount = 0;
        return "Login successful";
      } else {
        if (attemptCount >= maxAttempts) {
        accountLocked = true;
        return "Account locked due to too many failed login attempts";
        } else {
          const remainingAttempts = maxAttempts - attemptCount;
          return 'Attempt 1: Login failed';
          }      
        }
      };

      return handleLoginAttempt;

    }

   
