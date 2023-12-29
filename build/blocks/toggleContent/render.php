<?php
/**
 *
 * @return string
 */

$block_wrapper_attributes = get_block_wrapper_attributes(
    [
    'class' => 'toggle-content-front',
    ]
); ?>

<div <?php echo $block_wrapper_attributes; // phpcs:ignore ?>>
    <?php echo $content; ?>
</div>
