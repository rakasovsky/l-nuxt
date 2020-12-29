export const actions = {
    async callback (formData) {
        try {
            const token = await this.axios.post('mail.php', formData)

        } catch (err) {
            throw e
        }
    }
}