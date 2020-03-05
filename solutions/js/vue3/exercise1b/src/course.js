Vue.component("course-page",{
    props: ["course_id"],
    template: `
    <div>
    <h1>Grades for {{ course.course_id }}: {{ course.course_name }} </h1>
    <my-table
        v-bind:headings="headings"
        v-bind:rows="grades"
    ></my-table>

    <button v-on:click="$emit('back')">To main</button>
    <h1>Add grades</h1>
    <grade-form v-bind:course_id="course.course_id"></grade-form>
    </div>
    `,
    computed: {
        course: function(){
            return this.$store.getters.course(this.course_id);
        },
        grades: function(){
            return this.$store.getters.courseGrades(this.course_id);
        },
        headings: ()=> {
            return [
                { name: "Student number", 
                  key: "student_no" },
                { name: "Grade", 
                  key: "grade" }];
        }
    }
})