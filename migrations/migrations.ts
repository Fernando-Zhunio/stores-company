export function createTable(connection: any) {
    const sql = `
        CREATE TABLE IF NOT EXISTS stores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            latitude VARCHAR(255) NOT NULL,
            longitude VARCHAR(255) NOT NULL,
            company VARCHAR(255) NOT NULL,
            schedules VARCHAR(2500) NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        INSERT INTO stores (name, address, latitude, longitude, company, schedules) VALUES ('Test Store', 'Test Address', 'Test Latitude', 'Test Longitude', 'Test Company', '${JSON.stringify(generateSchedule())}');
    `;
    connection.exec(sql, (err: any) => {
        if (err) throw err;
    })
}

function generateSchedule() {
    return   {
            "monday": {
              "status": true,
              "start": "08:30",
              "end": "18:00"
            },
            "tuesday": {
              "status": true,
              "start": "08:30",
              "end": "18:00"
            },
            "wednesday": {
              "status": true,
              "start": "08:30",
              "end": "18:00"
            },
            "thursday": {
              "status": true,
              "start": "08:30",
              "end": "18:00"
            },
            "friday": {
              "status": true,
              "start": "08:30",
              "end": "18:00"
            },
            "saturday": {
              "status": true,
              "start": "08:30",
              "end": "18:00"
            },
            "sunday": {
              "status": false,
              "start": "08:30",
              "end": "18:00"
            }
    }
}