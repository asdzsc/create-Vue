<template>
  <div class="form">
    <div>
      <a-collapse accordion>
        <a-collapse-panel key="1" header="This is panel header 1">
          <p>{{ text }}</p>
        </a-collapse-panel>
        <a-collapse-panel
          key="2"
          header="This is panel header 2"
          :disabled="false"
        >
          <p>{{ text }}</p>
        </a-collapse-panel>
        <a-collapse-panel key="3" header="This is panel header 3">
          <p>{{ text }}</p>
        </a-collapse-panel>
      </a-collapse>
    </div>

    <div>
      <a-descriptions title="User Info">
        <a-descriptions-item label="UserName">
          Zhou Maomao
        </a-descriptions-item>
        <a-descriptions-item label="Telephone">
          1810000000
        </a-descriptions-item>
        <a-descriptions-item label="Live">
          Hangzhou, Zhejiang
        </a-descriptions-item>
        <a-descriptions-item label="Remark"> empty </a-descriptions-item>
        <a-descriptions-item label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </a-descriptions-item>
      </a-descriptions>
    </div>

    <div>
      <a-timeline mode="alternate">
        <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
        <a-timeline-item color="green">
          Solve initial network problems 2015-09-01
        </a-timeline-item>
        <a-timeline-item>
          <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px" />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </a-timeline-item>
        <a-timeline-item color="red">
          Network problems being solved 2015-09-01
        </a-timeline-item>
        <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
        <a-timeline-item>
          <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px" />
          Technical testing 2015-09-01
        </a-timeline-item>
      </a-timeline>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
    };
  },
};
</script>
<style lang="scss" scoped>
.form {
  div {
    margin-top: 20px;
  }
}
</style>
