

async function loginCall(uname, pass, url,  callback) {

    fetch(url, {
	    method: 'POST', 
	    mode: 'cors', 
	    redirect: 'follow',
	    headers: {
		    'Content-Type': 'application/json'
	    },
        body: JSON.stringify({
            username: uname,
            password: pass
        })
    })
    .then(res => res.json())
    .then(response => {
        // console.log("loginCall Response:", response);
        callback(response);
    })
    .catch(error => console.log(error));

    
}

async function studentCall(callback) {

    await fetch('http://localhost:3000/api/listStudents')
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            // console.log("studentCall Response:", response);
            callback(response.status);

            return response.json();
        })     
        .catch((error) => {
            console.log("looks like there was a problem: \n", error);
        });
}

async function courseCall(callback) {

    await fetch('http://localhost:3000/api/listcourses')
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            
            // console.log("courseCall Response:", response);
            callback(response.status);

            return response.json();
        })     
        .catch((error) => {
            console.log("looks like there was a problem: \n", error);
        });
}

async function chatCall(callback) {

    await fetch('http://localhost:3000/api/getChat')
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            
            // console.log("chatCall Response:", response);
            callback(response.status);

            return response.json();
        })     
        .catch((error) => {
            console.log("looks like there was a problem: \n", error);
        });
}

async function removeStudent(sid, url, callback) {

    fetch(url, {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sid: sid
        })
    })
   .then(res => res.json())
   .then(response => {
        // console.log("removeStudent Response:", response)
        callback(response);
   })
   .catch(error => console.log("looks like there was a problem: \n",error));
}

async function addStudent(sid, fname, sname, url, callback) {

    fetch(url, {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sid: sid,
            fname: fname,
            sname: sname,
            email: "",
            address: "",
            phone: "",
            enrolledin: "2"
        })
    })
   .then(res => res.json())
   .then(response => {
        // console.log("addStudent Response:", response)
        callback(response);
   })
   .catch(error => console.log("looks like there was a problem: \n",error));
}

async function getEnrolled(cid, url, callback){

    fetch(url, {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cid: cid
        })
    })
   .then((response) => {
        if(!response) {
            throw Error(response.statusText);
        }

        callback(response.status);

        return response.json();
   })
   .catch((error) => {
        console.log("looks like there was a problem: \n", error);
   }); 
}

async function getGrade(sid, url, callback) {

    fetch(url, {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sid: sid
        })
    })
   .then((response) => {
        if(!response) {
            throw Error(response.statusText);
        }

        callback(response.status);

        return response.json();
   })
   .catch((error) => {
        console.log("looks like there was a problem: \n", error);
   });

}

async function getStudentGrade(sid, url, callback) {

    fetch(url, {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: sid
        })
    })
   .then((response) => {
        if(!response) {
            throw Error(response.statusText);
        }

        callback(response.status);

        return response.json();
   })
   .catch((error) => {
        console.log("looks like there was a problem: \n", error);
   });

}
  
  
  QUnit.module('TestingAPIs');

  
  
QUnit.test('Test login with correct details', (assert) => {
    const done = assert.async();
    loginCall('admin', 'admin', 'http://localhost:3000/api/login', (callback) => {
    assert.equal(callback, "ok");
    done();
   });
});

QUnit.test('Test login with incorrect details', (assert) => {
    const done = assert.async();
    loginCall('Name', 'admin', 'http://localhost:3000/api/login', (callback) => {
    assert.equal(callback, "fail");
    done();
 });
});

QUnit.test('Test list student page', (assert) => {
    const done = assert.async();
    studentCall((callback) => {
    assert.strictEqual(callback, 200, "Result");
    done();
 });
});

QUnit.test('Test list course page', (assert) => {
    const done = assert.async();
    courseCall((callback) => {
    assert.strictEqual(callback, 200, "Result");
    done();
 });
});

QUnit.test('Test add student', (assert) => {
    const done = assert.async();
    addStudent('6666', 'Test', 'Delete', 'http://localhost:3000/api/addNew', (callback) => {
    assert.equal(callback, "ok");
    done();
   });
});

QUnit.test('Test chat course page', (assert) => {
    const done = assert.async();
    courseCall((callback) => {
    assert.strictEqual(callback, 200, "Result");
    done();
 });
});

QUnit.test('Test view students enrolled in course', (assert) => {
    const done = assert.async();
    getEnrolled('2', 'http://localhost:3000/api/getEnrolledStudents', (callback) => {
    assert.strictEqual(callback, 200, "Result");
    done();
   });
});

QUnit.test('Test remove student', (assert) => {
    const done = assert.async();
    removeStudent('6666', 'http://localhost:3000/api/removeStudent', (callback) => {
    assert.equal(callback, "ok");
    done();
   });
});

// Student in DB with sid: 3465 required for this test to pass
QUnit.test('Test view Student Grades', (assert) => {
    const done = assert.async();
    getGrade('3465', 'http://localhost:3000/api/getGrade', (callback) => {
    assert.strictEqual(callback, 200, "Result");
    done();
   });
});

// Student in DB with cid: 2 and a grade required for this test to pass
QUnit.test('Test view Grades', (assert) => {
    const done = assert.async();
    getStudentGrade('2', 'http://localhost:3000/api/getStudentGrade', (callback) => {
    assert.strictEqual(callback, 200, "Result");
    done();
   });
});








