/**
 * Formats phone numbers to ensure they're in the correct format for Africa's Talking API
 * @param phoneNumbers Array or comma-separated string of phone numbers
 * @returns Formatted comma-separated string of phone numbers
 */
export function formatPhoneNumbers(phoneNumbers: string | string[]): string {
    // If it's a string, split by comma
    const numbers = Array.isArray(phoneNumbers) ? phoneNumbers : phoneNumbers.split(",").map((num) => num.trim())
  
    // Format each number to ensure it has the country code
    const formattedNumbers = numbers.map((number) => {
      // Remove any non-digit characters
      const cleaned = number.replace(/\D/g, "")
  
      // If it doesn't start with +, add it
      if (!number.startsWith("+")) {
        return `+${cleaned}`
      }
  
      return number
    })
  
    return formattedNumbers.join(",")
  }
  
  /**
   * Calculates the number of SMS messages based on character count
   * @param message The SMS message
   * @returns Number of SMS messages that will be sent
   */
  export function calculateSMSCount(message: string): number {
    const singleSMSLimit = 160
    const multipartSMSLimit = 153 // Each part of a multipart SMS can only contain 153 characters
  
    if (message.length <= singleSMSLimit) {
      return 1
    }
  
    return Math.ceil(message.length / multipartSMSLimit)
  }
  
  