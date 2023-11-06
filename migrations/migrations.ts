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

        INSERT INTO stores (name, address, latitude, longitude, company, schedules) VALUES ('Test Store', 'Test Address', 'Test Latitude', 'Test Longitude', 'Test Company', );
    `;
    connection.exec(sql, (err: any) => {
        if (err) throw err;
    })
}

function generateSchedule() {
    
}