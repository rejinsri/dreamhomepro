<?php
class Timestamp {
    /**
     * Get current date and time in Indian format
     * @return array Array containing formatted date and time
     */
    public static function getIndianDateTime() {
        date_default_timezone_set('Asia/Kolkata');
        
        $timestamp = time();
        
        return [
            'date' => date('d-m-Y', $timestamp),
            'time' => date('h:i:s A', $timestamp),
            'full_datetime' => date('d-m-Y h:i:s A', $timestamp)
        ];
    }

    /**
     * Format a specific timestamp to Indian format
     * @param string $timestamp Unix timestamp or date string
     * @return array Array containing formatted date and time
     */
    public static function formatToIndian($timestamp) {
        date_default_timezone_set('Asia/Kolkata');
        
        if (!is_numeric($timestamp)) {
            $timestamp = strtotime($timestamp);
        }
        
        return [
            'date' => date('d-m-Y', $timestamp),
            'time' => date('h:i:s A', $timestamp),
            'full_datetime' => date('d-m-Y h:i:s A', $timestamp)
        ];
    }
}
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

require_once __DIR__ . '/Timestamp.php';

try {
    $response = Timestamp::getIndianDateTime();
    echo json_encode($response);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Internal Server Error']);
}